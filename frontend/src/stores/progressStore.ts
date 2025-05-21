import { create } from 'zustand';
import { supabase } from '../lib/supabase';

interface Progress {
  academicIntegration: number;
  socialIntegration: number;
  resourceUtilization: number;
  mentoringSessions: number;
  resourcesAccessed: number;
  communityParticipation: number;
  eventsAttended: number;
}

interface ProgressStore {
  progress: Progress | null;
  loading: boolean;
  error: string | null;
  fetchProgress: () => Promise<void>;
  updateProgress: (updates: Partial<Progress>) => Promise<void>;
}

export const useProgressStore = create<ProgressStore>((set, get) => ({
  progress: null,
  loading: false,
  error: null,

  fetchProgress: async () => {
    try {
      set({ loading: true, error: null });
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user logged in');

      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) throw error;
      
      set({
        progress: {
          academicIntegration: data.academic_integration,
          socialIntegration: data.social_integration,
          resourceUtilization: data.resource_utilization,
          mentoringSessions: data.mentoring_sessions_completed,
          resourcesAccessed: data.resources_accessed,
          communityParticipation: data.community_participation,
          eventsAttended: data.events_attended
        }
      });
    } catch (err) {
      set({ error: (err as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  updateProgress: async (updates: Partial<Progress>) => {
    try {
      set({ loading: true, error: null });
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user logged in');

      const { error } = await supabase
        .from('user_progress')
        .update({
          academic_integration: updates.academicIntegration,
          social_integration: updates.socialIntegration,
          resource_utilization: updates.resourceUtilization,
          mentoring_sessions_completed: updates.mentoringSessions,
          resources_accessed: updates.resourcesAccessed,
          community_participation: updates.communityParticipation,
          events_attended: updates.eventsAttended,
          last_updated: new Date().toISOString()
        })
        .eq('user_id', user.id);

      if (error) throw error;
      
      // Update local state
      set({
        progress: {
          ...get().progress!,
          ...updates
        }
      });
    } catch (err) {
      set({ error: (err as Error).message });
    } finally {
      set({ loading: false });
    }
  }
}));