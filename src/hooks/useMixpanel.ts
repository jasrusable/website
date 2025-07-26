import { useCallback } from 'react';
import { track, trackPageView, identify, setUserProperties, reset } from '../utils/mixpanel';
import type { EventProperties, MixpanelEventName } from '../types/analytics';

export const useMixpanel = () => {
  const trackEvent = useCallback((eventName: MixpanelEventName | string, properties?: EventProperties) => {
    track(eventName, properties);
  }, []);

  const trackPage = useCallback((pageName: string, properties?: Record<string, any>) => {
    trackPageView(pageName, properties);
  }, []);

  const identifyUser = useCallback((userId: string) => {
    identify(userId);
  }, []);

  const setUser = useCallback((properties: Record<string, any>) => {
    setUserProperties(properties);
  }, []);

  const resetUser = useCallback(() => {
    reset();
  }, []);

  return {
    trackEvent,
    trackPage,
    identifyUser,
    setUser,
    resetUser,
  };
};