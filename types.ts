export * from './response-types'

// Additional type definitions
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface FilterOptions {
  search?: string;
  industry?: string;
  stage?: string;
  location?: string;
  page?: number;
  limit?: number;
}