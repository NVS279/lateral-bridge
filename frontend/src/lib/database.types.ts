export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          avatar_url: string | null
          role: string
          department: string | null
          year: string | null
          join_date: string
          last_seen: string
          email_notifications: boolean
          forum_notifications: boolean
          profile_visibility: boolean
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          role?: string
          department?: string | null
          year?: string | null
          join_date?: string
          last_seen?: string
          email_notifications?: boolean
          forum_notifications?: boolean
          profile_visibility?: boolean
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          avatar_url?: string | null
          role?: string
          department?: string | null
          year?: string | null
          join_date?: string
          last_seen?: string
          email_notifications?: boolean
          forum_notifications?: boolean
          profile_visibility?: boolean
        }
      }
      posts: {
        Row: {
          id: string
          author_id: string
          title: string
          content: string
          category: string
          is_pinned: boolean
          created_at: string
          updated_at: string
          likes_count: number
          replies_count: number
          views_count: number
        }
        Insert: {
          id?: string
          author_id: string
          title: string
          content: string
          category: string
          is_pinned?: boolean
          created_at?: string
          updated_at?: string
          likes_count?: number
          replies_count?: number
          views_count?: number
        }
        Update: {
          id?: string
          author_id?: string
          title?: string
          content?: string
          category?: string
          is_pinned?: boolean
          created_at?: string
          updated_at?: string
          likes_count?: number
          replies_count?: number
          views_count?: number
        }
      }
      resources: {
        Row: {
          id: string
          title: string
          description: string | null
          category: string
          type: string
          url: string
          thumbnail_url: string | null
          author: string
          duration: string | null
          uploaded_by: string | null
          upload_date: string
          views_count: number
          likes_count: number
          downloads_count: number
          rating: number
          review_count: number
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          category: string
          type: string
          url: string
          thumbnail_url?: string | null
          author: string
          duration?: string | null
          uploaded_by?: string | null
          upload_date?: string
          views_count?: number
          likes_count?: number
          downloads_count?: number
          rating?: number
          review_count?: number
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          category?: string
          type?: string
          url?: string
          thumbnail_url?: string | null
          author?: string
          duration?: string | null
          uploaded_by?: string | null
          upload_date?: string
          views_count?: number
          likes_count?: number
          downloads_count?: number
          rating?: number
          review_count?: number
        }
      }
      user_activity: {
        Row: {
          id: string
          user_id: string
          activity_type: string
          description: string
          resource_id: string | null
          post_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          activity_type: string
          description: string
          resource_id?: string | null
          post_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          activity_type?: string
          description?: string
          resource_id?: string | null
          post_id?: string | null
          created_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          academic_integration: number
          social_integration: number
          resource_utilization: number
          mentoring_sessions_completed: number
          resources_accessed: number
          community_participation: number
          events_attended: number
          last_updated: string
        }
        Insert: {
          id?: string
          user_id: string
          academic_integration?: number
          social_integration?: number
          resource_utilization?: number
          mentoring_sessions_completed?: number
          resources_accessed?: number
          community_participation?: number
          events_attended?: number
          last_updated?: string
        }
        Update: {
          id?: string
          user_id?: string
          academic_integration?: number
          social_integration?: number
          resource_utilization?: number
          mentoring_sessions_completed?: number
          resources_accessed?: number
          community_participation?: number
          events_attended?: number
          last_updated?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}