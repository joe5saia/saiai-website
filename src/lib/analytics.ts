/**
 * Shared analytics helpers for page and CTA tracking.
 */

export interface AnalyticsConfig {
  isEnabled: boolean;
  measurementId: string | null;
}

export interface AnalyticsDataset {
  analyticsEvent?: string;
  analyticsLabel?: string;
  analyticsLocation?: string;
}

/**
 * Normalize analytics configuration so components can branch cleanly.
 */
export function getAnalyticsConfig(measurementId?: string): AnalyticsConfig {
  const normalizedMeasurementId = measurementId?.trim() || null;

  return {
    isEnabled: Boolean(normalizedMeasurementId),
    measurementId: normalizedMeasurementId,
  };
}

/**
 * Build a compact event detail payload from data attributes.
 */
export function buildAnalyticsDetail(
  dataset: AnalyticsDataset,
): Record<string, string> {
  return Object.fromEntries(
    Object.entries({
      label: dataset.analyticsLabel,
      location: dataset.analyticsLocation,
    }).filter(([, value]) => Boolean(value)),
  ) as Record<string, string>;
}
