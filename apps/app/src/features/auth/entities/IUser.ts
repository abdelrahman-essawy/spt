export interface IUser {
  id: string;
  name: string;
  phone: string;
  avatar: string;
  fcm_token: string;
  is_active: boolean;
  roles: string[];
  created_at: string;
  updated_at: string;
  rating_total: number;
  rating_count: number;
  rating: number;
  city_id: string;
  lang: string;
  email: string | null;
  has_push_notifications: boolean;
  has_sms_notifications: boolean;
  has_ability_to_visually_contact_with_client: boolean;
  has_ability_to_vocally_contact_with_client: boolean;
  deleted_at: string | null;
  permission_group_id: any;
}
