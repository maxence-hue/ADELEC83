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
      pages: {
        Row: {
          id: string
          slug: string
          title: string
          meta_title: string | null
          meta_description: string | null
          hero_title: string | null
          hero_subtitle: string | null
          hero_image: string | null
          content: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          meta_title?: string | null
          meta_description?: string | null
          hero_title?: string | null
          hero_subtitle?: string | null
          hero_image?: string | null
          content?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          meta_title?: string | null
          meta_description?: string | null
          hero_title?: string | null
          hero_subtitle?: string | null
          hero_image?: string | null
          content?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      realisations: {
        Row: {
          id: string
          title: string
          description: string | null
          category: 'electricite' | 'photovoltaique' | 'climatisation' | 'bornes' | null
          city: string | null
          images: string[] | null
          before_image: string | null
          after_image: string | null
          testimonial: string | null
          featured: boolean
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          category?: 'electricite' | 'photovoltaique' | 'climatisation' | 'bornes' | null
          city?: string | null
          images?: string[] | null
          before_image?: string | null
          after_image?: string | null
          testimonial?: string | null
          featured?: boolean
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          category?: 'electricite' | 'photovoltaique' | 'climatisation' | 'bornes' | null
          city?: string | null
          images?: string[] | null
          before_image?: string | null
          after_image?: string | null
          testimonial?: string | null
          featured?: boolean
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      articles: {
        Row: {
          id: string
          slug: string
          title: string
          excerpt: string | null
          content: string | null
          featured_image: string | null
          category: string | null
          tags: string[] | null
          author: string
          published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          excerpt?: string | null
          content?: string | null
          featured_image?: string | null
          category?: string | null
          tags?: string[] | null
          author?: string
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          excerpt?: string | null
          content?: string | null
          featured_image?: string | null
          category?: string | null
          tags?: string[] | null
          author?: string
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      temoignages: {
        Row: {
          id: string
          name: string
          city: string | null
          service: string | null
          rating: number | null
          comment: string
          avatar: string | null
          featured: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          city?: string | null
          service?: string | null
          rating?: number | null
          comment: string
          avatar?: string | null
          featured?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          city?: string | null
          service?: string | null
          rating?: number | null
          comment?: string
          avatar?: string | null
          featured?: boolean
          created_at?: string
        }
      }
      faq: {
        Row: {
          id: string
          question: string
          answer: string
          category: string | null
          order_index: number
          active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          question: string
          answer: string
          category?: string | null
          order_index?: number
          active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          question?: string
          answer?: string
          category?: string | null
          order_index?: number
          active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      company_info: {
        Row: {
          id: string
          key: string
          value: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          value?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          value?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      contact_requests: {
        Row: {
          id: string
          name: string
          email: string
          phone: string | null
          project_type: string | null
          message: string | null
          status: string
          source_page: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          phone?: string | null
          project_type?: string | null
          message?: string | null
          status?: string
          source_page?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          phone?: string | null
          project_type?: string | null
          message?: string | null
          status?: string
          source_page?: string | null
          created_at?: string
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
