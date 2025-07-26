import mixpanel from 'mixpanel-browser';
import type { EventProperties, MixpanelEventName } from '../types/analytics';

// Check if we're in production mode
const isProduction = () => process.env.NODE_ENV === 'production';

// Check if Mixpanel should be enabled
const isMixpanelEnabled = () => {
  return isProduction() && typeof window !== 'undefined';
};

// Initialize Mixpanel
const initMixpanel = () => {
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

  if (!token) {
    if (isProduction()) {
      console.warn('Mixpanel token not found in production. Analytics will not work.');
    }
    return;
  }

  if (!isMixpanelEnabled()) {
    console.info('Mixpanel tracking disabled in development mode.');
    return;
  }

  mixpanel.init(token, {
    debug: false, // Always false since we only track in production
    track_pageview: false, // We'll handle page views manually
    persistence: 'localStorage',
  });

  console.info('Mixpanel initialized for production tracking.');
};

// Track events with proper typing - only in production
const track = (eventName: MixpanelEventName | string, properties?: EventProperties) => {
  if (!isMixpanelEnabled()) {
    console.info(`[Dev] Would track event: ${eventName}`, properties);
    return;
  }

  mixpanel.track(eventName, properties);
};

// Track page views - only in production
const trackPageView = (pageName: string, properties?: Record<string, any>) => {
  if (!isMixpanelEnabled()) {
    console.info(`[Dev] Would track page view: ${pageName}`, properties);
    return;
  }

  mixpanel.track('Page View', {
    page: pageName,
    ...properties,
  });
};

// Identify user - only in production
const identify = (userId: string) => {
  if (!isMixpanelEnabled()) {
    console.info(`[Dev] Would identify user: ${userId}`);
    return;
  }

  mixpanel.identify(userId);
};

// Set user properties - only in production
const setUserProperties = (properties: Record<string, any>) => {
  if (!isMixpanelEnabled()) {
    console.info('[Dev] Would set user properties:', properties);
    return;
  }

  mixpanel.people.set(properties);
};

// Reset user (for logout) - only in production
const reset = () => {
  if (!isMixpanelEnabled()) {
    console.info('[Dev] Would reset user');
    return;
  }

  mixpanel.reset();
};

export {
  initMixpanel,
  track,
  trackPageView,
  identify,
  setUserProperties,
  reset,
  isProduction,
  isMixpanelEnabled,
};