export interface Role {
  id: number;
  name: string;
  users_count: number;
}

export interface Permission {
  id: number;
  name: string;
  codename?: string;
  content_type?: number;
}

export interface RoleWithPermissions {
  id: number;
  name: string;
  permissions: Permission[];
}

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface RoleSelected {
  id: number;
  name: string;
}
