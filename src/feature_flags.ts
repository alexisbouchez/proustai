import FeatureFlagsService from '#services/feature_flags_service'
import env from '#start/env'

FeatureFlagsService.defineFeatureFlag(
  'billing',
  () =>
    !!env.get('STRIPE_SECRET_KEY') &&
    !!env.get('STRIPE_PUBLIC_KEY') &&
    !!env.get('STRIPE_WEBHOOK_SECRET')
)

FeatureFlagsService.defineFeatureFlag(
  'google_auth',
  () =>
    !!env.get('GOOGLE_CLIENT_ID') &&
    !!env.get('GOOGLE_CLIENT_SECRET') &&
    !!env.get('GOOGLE_CALLBACK_URL')
)
