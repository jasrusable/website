// Base properties that can be included with any event
export interface BaseEventProperties {
  source?: string;
  timestamp?: string;
  user_agent?: string;
  referrer?: string;
}

// Generic link clicked event with comprehensive attributes
export interface LinkClickedProperties extends BaseEventProperties {
  link_type: 'social' | 'external' | 'internal' | 'hire_me' | 'navigation';
  link_name: string; // e.g., "FinWise", "LinkedIn", "Hire Me", etc.
  url: string;
  platform?: 'Email' | 'X (Twitter)' | 'LinkedIn' | 'GitHub'; // For social links
  target?: '_blank' | '_self'; // How the link opens
  position?: string; // Where on the page the link is located
}

export interface PageViewProperties extends BaseEventProperties {
  page: string;
  title?: string;
  path?: string;
}

// Union type of all possible event properties
export type EventProperties =
  | LinkClickedProperties
  | PageViewProperties
  | BaseEventProperties;

// Event names as constants for consistency
export const MIXPANEL_EVENTS = {
  LINK_CLICKED: 'Link Clicked',
  PAGE_VIEW: 'Page View',
} as const;

export type MixpanelEventName = typeof MIXPANEL_EVENTS[keyof typeof MIXPANEL_EVENTS];

// Helper constants for link types
export const LINK_TYPES = {
  SOCIAL: 'social',
  EXTERNAL: 'external',
  INTERNAL: 'internal',
  HIRE_ME: 'hire_me',
  NAVIGATION: 'navigation',
} as const;

export const SOCIAL_PLATFORMS = {
  EMAIL: 'Email',
  X_TWITTER: 'X (Twitter)',
  LINKEDIN: 'LinkedIn',
  GITHUB: 'GitHub',
} as const;