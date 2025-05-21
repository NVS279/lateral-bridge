import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Activity {
  id: string;
  activityType: string;
  description: string;
  resourceId?: string;
  postId?: string;
  createdAt: Date;
}

interface ActivityStore {
  activities: Activity[];
  loading: boolean;
  error: string | null;
  fetchActivities: () => Promise<void>;
  logActivity: (activity: Omit<Activity, 'id' | 'createdAt'>) => Promise<void>;
}

export const useActivityStore = create<ActivityStore>((set, get) => ({
  activities: [],
  loading: false,
  error: null,

  fetchActivities: async () => {
    try {
      set({ loading: true, error: null });
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user logged in');

      const { data, error } = await supabase
        .from('user_activity')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      
      set({
        activities: data.map(activity => ({
          id: activity.id,
          activityType: activity.activity_type,
          description: activity.description,
          resourceId: activity.resource_id,
          postId: activity.post_id,
          createdAt: new Date(activity.created_at)
        }))
      });
    } catch (err) {
      set({ error: (err as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  logActivity: async (activity) => {
    try {
      set({ loading: true, error: null });
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user logged in');

      const { data, error } = await supabase
        .from('user_activity')
        .insert({
          user_id: user.id,
          activity_type: activity.activityType,
          description: activity.description,
          resource_id: activity.resourceId,
          post_id: activity.postId
        })
        .select()
        .single();

      if (error) throw error;
      
      // Update local state
      set({
        activities: [{
          id: data.id,
          activityType: data.activity_type,
          description: data.description,
          resourceId: data.resource_id,
          postId: data.post_id,
          createdAt: new Date(data.created_at)
        }, ...get().activities]
      });
    } catch (err) {
      set({ error: (err as Error).message });
    } finally {
      set({ loading: false });
    }
  }
}));