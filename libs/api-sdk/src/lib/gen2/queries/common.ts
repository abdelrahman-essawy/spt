// generated with @7nohe/openapi-react-query-codegen@1.6.1

import { UseQueryResult } from '@tanstack/react-query';
import {
  AdminAdminOrdersService,
  AdminAuthService,
  AdminCitiesService,
  AdminCityServiceService,
  AdminCommissionsService,
  AdminCustomNotificationService,
  AdminLandingAboutSectionsService,
  AdminLandingAboutService,
  AdminLandingDownloadSectionService,
  AdminLandingGuaranteeRightService,
  AdminLandingHowHelpService,
  AdminLandingPartnersService,
  AdminLandingSiteOfferService,
  AdminLandingSlidersService,
  AdminMessagesService,
  AdminMessageTemplatesService,
  AdminPagesService,
  AdminPermissionGroupsService,
  AdminPermissionsService,
  AdminPlatformReviewsService,
  AdminProviderProfilesService,
  AdminProviderSubscriptionPlansService,
  AdminServicesService,
  AdminSettingService,
  AdminTicketsService,
  AdminUsersService,
  AuthenticationService,
  BrandModelsService,
  BrandService,
  CallService,
  ChatService,
  CitiesService,
  ClientClientOfferService,
  ClientClientOrdersService,
  ClientServicesService,
  LandingService,
  MessagesService,
  NotificationService,
  OrderSparePartService,
  PagesService,
  PlatformReviewsService,
  ProviderProviderOfferService,
  ProviderProviderOrdersService,
  ProviderProviderProfileService,
  ProviderProviderSubscriptionService,
  SettingsService,
  SiteOffersService,
  TicketService,
  VinService,
} from '../requests/services.gen';

export type AuthenticationServiceGetSharedAuthMeDefaultResponse = Awaited<
  ReturnType<typeof AuthenticationService.getSharedAuthMe>
>;
export type AuthenticationServiceGetSharedAuthMeQueryResult<
  TData = AuthenticationServiceGetSharedAuthMeDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAuthenticationServiceGetSharedAuthMeKey =
  'AuthenticationServiceGetSharedAuthMe';
export const UseAuthenticationServiceGetSharedAuthMeKeyFn = (
  {
    contentLanguage,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAuthenticationServiceGetSharedAuthMeKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      xRequestedWith,
    },
  ]),
];
export type BrandServiceGetBrandsDefaultResponse = Awaited<
  ReturnType<typeof BrandService.getBrands>
>;
export type BrandServiceGetBrandsQueryResult<
  TData = BrandServiceGetBrandsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useBrandServiceGetBrandsKey = 'BrandServiceGetBrands';
export const UseBrandServiceGetBrandsKeyFn = (
  {
    contentLanguage,
    paginate,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    paginate?: number;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useBrandServiceGetBrandsKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      paginate,
      xRequestedWith,
    },
  ]),
];
export type SiteOffersServiceGetSiteOffersDefaultResponse = Awaited<
  ReturnType<typeof SiteOffersService.getSiteOffers>
>;
export type SiteOffersServiceGetSiteOffersQueryResult<
  TData = SiteOffersServiceGetSiteOffersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useSiteOffersServiceGetSiteOffersKey =
  'SiteOffersServiceGetSiteOffers';
export const UseSiteOffersServiceGetSiteOffersKeyFn = (
  {
    contentLanguage,
    paginate,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    paginate?: number;
    page?: number;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useSiteOffersServiceGetSiteOffersKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      paginate,
      xRequestedWith,
    },
  ]),
];
export type CitiesServiceGetCitiesDefaultResponse = Awaited<
  ReturnType<typeof CitiesService.getCities>
>;
export type CitiesServiceGetCitiesQueryResult<
  TData = CitiesServiceGetCitiesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useCitiesServiceGetCitiesKey = 'CitiesServiceGetCities';
export const UseCitiesServiceGetCitiesKeyFn = (
  {
    contentLanguage,
    paginate,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    paginate?: number;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useCitiesServiceGetCitiesKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      paginate,
      xRequestedWith,
    },
  ]),
];
export type BrandModelsServiceGetBrandsAlfaRomeoModelsDefaultResponse = Awaited<
  ReturnType<typeof BrandModelsService.getBrandsAlfaRomeoModels>
>;
export type BrandModelsServiceGetBrandsAlfaRomeoModelsQueryResult<
  TData = BrandModelsServiceGetBrandsAlfaRomeoModelsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useBrandModelsServiceGetBrandsAlfaRomeoModelsKey =
  'BrandModelsServiceGetBrandsAlfaRomeoModels';
export const UseBrandModelsServiceGetBrandsAlfaRomeoModelsKeyFn = (
  {
    contentLanguage,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useBrandModelsServiceGetBrandsAlfaRomeoModelsKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      xRequestedWith,
    },
  ]),
];
export type VinServiceGetVinJn8At3Mm3Pw009894DefaultResponse = Awaited<
  ReturnType<typeof VinService.getVinJn8At3Mm3Pw009894>
>;
export type VinServiceGetVinJn8At3Mm3Pw009894QueryResult<
  TData = VinServiceGetVinJn8At3Mm3Pw009894DefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useVinServiceGetVinJn8At3Mm3Pw009894Key =
  'VinServiceGetVinJn8At3Mm3Pw009894';
export const UseVinServiceGetVinJn8At3Mm3Pw009894KeyFn = (
  {
    contentLanguage,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useVinServiceGetVinJn8At3Mm3Pw009894Key,
  ...(queryKey ?? [
    {
      contentLanguage,
      xRequestedWith,
    },
  ]),
];
export type TicketServiceGetTicketsDefaultResponse = Awaited<
  ReturnType<typeof TicketService.getTickets>
>;
export type TicketServiceGetTicketsQueryResult<
  TData = TicketServiceGetTicketsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useTicketServiceGetTicketsKey = 'TicketServiceGetTickets';
export const UseTicketServiceGetTicketsKeyFn = (
  {
    contentLanguage,
    page,
    paginate,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    page?: number;
    paginate?: number;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useTicketServiceGetTicketsKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      page,
      paginate,
      xRequestedWith,
    },
  ]),
];
export type TicketServiceGetTicketB33C269eB489415e842f65472771A0F3DefaultResponse =
  Awaited<
    ReturnType<typeof TicketService.getTicketB33C269eB489415e842f65472771A0F3>
  >;
export type TicketServiceGetTicketB33C269eB489415e842f65472771A0F3QueryResult<
  TData = TicketServiceGetTicketB33C269eB489415e842f65472771A0F3DefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useTicketServiceGetTicketB33C269eB489415e842f65472771A0F3Key =
  'TicketServiceGetTicketB33C269eB489415e842f65472771A0F3';
export const UseTicketServiceGetTicketB33C269eB489415e842f65472771A0F3KeyFn = (
  {
    contentLanguage,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useTicketServiceGetTicketB33C269eB489415e842f65472771A0F3Key,
  ...(queryKey ?? [
    {
      contentLanguage,
      xRequestedWith,
    },
  ]),
];
export type NotificationServiceGetNotificationIndexDefaultResponse = Awaited<
  ReturnType<typeof NotificationService.getNotificationIndex>
>;
export type NotificationServiceGetNotificationIndexQueryResult<
  TData = NotificationServiceGetNotificationIndexDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useNotificationServiceGetNotificationIndexKey =
  'NotificationServiceGetNotificationIndex';
export const UseNotificationServiceGetNotificationIndexKeyFn = (
  {
    contentLanguage,
    paginate,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    paginate?: number;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useNotificationServiceGetNotificationIndexKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      paginate,
      xRequestedWith,
    },
  ]),
];
export type NotificationServiceGetNotificationUnreadCountDefaultResponse =
  Awaited<ReturnType<typeof NotificationService.getNotificationUnreadCount>>;
export type NotificationServiceGetNotificationUnreadCountQueryResult<
  TData = NotificationServiceGetNotificationUnreadCountDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useNotificationServiceGetNotificationUnreadCountKey =
  'NotificationServiceGetNotificationUnreadCount';
export const UseNotificationServiceGetNotificationUnreadCountKeyFn = (
  {
    contentLanguage,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useNotificationServiceGetNotificationUnreadCountKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      xRequestedWith,
    },
  ]),
];
export type AdminAdminOrdersServiceGetAdminOrdersDefaultResponse = Awaited<
  ReturnType<typeof AdminAdminOrdersService.getAdminOrders>
>;
export type AdminAdminOrdersServiceGetAdminOrdersQueryResult<
  TData = AdminAdminOrdersServiceGetAdminOrdersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminAdminOrdersServiceGetAdminOrdersKey =
  'AdminAdminOrdersServiceGetAdminOrders';
export const UseAdminAdminOrdersServiceGetAdminOrdersKeyFn = (
  {
    contentLanguage,
    paginate,
    search,
    status,
    type,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    paginate?: number;
    search?: string;
    status?: string;
    type?: string;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminAdminOrdersServiceGetAdminOrdersKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      paginate,
      search,
      status,
      type,
      xRequestedWith,
    },
  ]),
];
export type AdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186DefaultResponse =
  Awaited<
    ReturnType<
      typeof AdminAdminOrdersService.getAdminOrders1D9De514C4E149878Eb90909556C7186
    >
  >;
export type AdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186QueryResult<
  TData = AdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186DefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186Key =
  'AdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186';
export const UseAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186KeyFn =
  (
    {
      contentLanguage,
      xRequestedWith,
    }: {
      contentLanguage?: string;
      xRequestedWith?: string;
    } = {},
    queryKey?: Array<unknown>
  ) => [
    useAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186Key,
    ...(queryKey ?? [
      {
        contentLanguage,
        xRequestedWith,
      },
    ]),
  ];
export type AdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186OffersDefaultResponse =
  Awaited<
    ReturnType<
      typeof AdminAdminOrdersService.getAdminOrders1D9De514C4E149878Eb90909556C7186Offers
    >
  >;
export type AdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186OffersQueryResult<
  TData = AdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186OffersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186OffersKey =
  'AdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186Offers';
export const UseAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186OffersKeyFn =
  (
    {
      contentLanguage,
      xRequestedWith,
    }: {
      contentLanguage?: string;
      xRequestedWith?: string;
    } = {},
    queryKey?: Array<unknown>
  ) => [
    useAdminAdminOrdersServiceGetAdminOrders1D9De514C4E149878Eb90909556C7186OffersKey,
    ...(queryKey ?? [
      {
        contentLanguage,
        xRequestedWith,
      },
    ]),
  ];
export type AdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChatDefaultResponse =
  Awaited<
    ReturnType<
      typeof AdminAdminOrdersService.getAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChat
    >
  >;
export type AdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChatQueryResult<
  TData = AdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChatDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChatKey =
  'AdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChat';
export const UseAdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChatKeyFn =
  (
    {
      contentLanguage,
      xRequestedWith,
    }: {
      contentLanguage?: string;
      xRequestedWith?: string;
    } = {},
    queryKey?: Array<unknown>
  ) => [
    useAdminAdminOrdersServiceGetAdminOrders89572A05E77b48Dc8E1b645Fe0C82B6aChatKey,
    ...(queryKey ?? [
      {
        contentLanguage,
        xRequestedWith,
      },
    ]),
  ];
export type SettingsServiceGetSettingCallsDefaultResponse = Awaited<
  ReturnType<typeof SettingsService.getSettingCalls>
>;
export type SettingsServiceGetSettingCallsQueryResult<
  TData = SettingsServiceGetSettingCallsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useSettingsServiceGetSettingCallsKey =
  'SettingsServiceGetSettingCalls';
export const UseSettingsServiceGetSettingCallsKeyFn = (
  queryKey?: Array<unknown>
) => [useSettingsServiceGetSettingCallsKey, ...(queryKey ?? [])];
export type SettingsServiceGetSettingDefaultResponse = Awaited<
  ReturnType<typeof SettingsService.getSetting>
>;
export type SettingsServiceGetSettingQueryResult<
  TData = SettingsServiceGetSettingDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useSettingsServiceGetSettingKey = 'SettingsServiceGetSetting';
export const UseSettingsServiceGetSettingKeyFn = (
  {
    section,
  }: {
    section?: string;
  } = {},
  queryKey?: Array<unknown>
) => [useSettingsServiceGetSettingKey, ...(queryKey ?? [{ section }])];
export type AdminCitiesServiceGetAdminCitiesDefaultResponse = Awaited<
  ReturnType<typeof AdminCitiesService.getAdminCities>
>;
export type AdminCitiesServiceGetAdminCitiesQueryResult<
  TData = AdminCitiesServiceGetAdminCitiesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminCitiesServiceGetAdminCitiesKey =
  'AdminCitiesServiceGetAdminCities';
export const UseAdminCitiesServiceGetAdminCitiesKeyFn = (
  {
    page,
    paginate,
    search,
  }: {
    page?: number;
    paginate?: number;
    search?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminCitiesServiceGetAdminCitiesKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
      search,
    },
  ]),
];
export type AdminProviderProfilesServiceGetAdminProviderProfilesDefaultResponse =
  Awaited<
    ReturnType<typeof AdminProviderProfilesService.getAdminProviderProfiles>
  >;
export type AdminProviderProfilesServiceGetAdminProviderProfilesQueryResult<
  TData = AdminProviderProfilesServiceGetAdminProviderProfilesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminProviderProfilesServiceGetAdminProviderProfilesKey =
  'AdminProviderProfilesServiceGetAdminProviderProfiles';
export const UseAdminProviderProfilesServiceGetAdminProviderProfilesKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminProviderProfilesServiceGetAdminProviderProfilesKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type AdminUsersServiceGetAdminUsersDefaultResponse = Awaited<
  ReturnType<typeof AdminUsersService.getAdminUsers>
>;
export type AdminUsersServiceGetAdminUsersQueryResult<
  TData = AdminUsersServiceGetAdminUsersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminUsersServiceGetAdminUsersKey =
  'AdminUsersServiceGetAdminUsers';
export const UseAdminUsersServiceGetAdminUsersKeyFn = (
  {
    accept,
    page,
    paginate,
    role,
  }: {
    accept?: string;
    page?: number;
    paginate?: number;
    role?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminUsersServiceGetAdminUsersKey,
  ...(queryKey ?? [
    {
      accept,
      page,
      paginate,
      role,
    },
  ]),
];
export type AdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7DefaultResponse =
  Awaited<
    ReturnType<
      typeof AdminUsersService.getAdminUsers72D5778fB67b4E97B4E2F98F695162A7
    >
  >;
export type AdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7QueryResult<
  TData = AdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7DefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7Key =
  'AdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7';
export const UseAdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7KeyFn =
  (
    {
      accept,
    }: {
      accept?: string;
    } = {},
    queryKey?: Array<unknown>
  ) => [
    useAdminUsersServiceGetAdminUsers72D5778fB67b4E97B4E2F98F695162A7Key,
    ...(queryKey ?? [{ accept }]),
  ];
export type AdminMessageTemplatesServiceGetAdminMessageTemplatesDefaultResponse =
  Awaited<
    ReturnType<typeof AdminMessageTemplatesService.getAdminMessageTemplates>
  >;
export type AdminMessageTemplatesServiceGetAdminMessageTemplatesQueryResult<
  TData = AdminMessageTemplatesServiceGetAdminMessageTemplatesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminMessageTemplatesServiceGetAdminMessageTemplatesKey =
  'AdminMessageTemplatesServiceGetAdminMessageTemplates';
export const UseAdminMessageTemplatesServiceGetAdminMessageTemplatesKeyFn = (
  {
    accept,
    page,
    paginate,
  }: {
    accept?: string;
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminMessageTemplatesServiceGetAdminMessageTemplatesKey,
  ...(queryKey ?? [
    {
      accept,
      page,
      paginate,
    },
  ]),
];
export type AdminMessageTemplatesServiceGetAdminMessageTemplates2DefaultResponse =
  Awaited<
    ReturnType<typeof AdminMessageTemplatesService.getAdminMessageTemplates2>
  >;
export type AdminMessageTemplatesServiceGetAdminMessageTemplates2QueryResult<
  TData = AdminMessageTemplatesServiceGetAdminMessageTemplates2DefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminMessageTemplatesServiceGetAdminMessageTemplates2Key =
  'AdminMessageTemplatesServiceGetAdminMessageTemplates2';
export const UseAdminMessageTemplatesServiceGetAdminMessageTemplates2KeyFn = (
  {
    accept,
  }: {
    accept?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminMessageTemplatesServiceGetAdminMessageTemplates2Key,
  ...(queryKey ?? [{ accept }]),
];
export type AdminServicesServiceGetAdminServicesDefaultResponse = Awaited<
  ReturnType<typeof AdminServicesService.getAdminServices>
>;
export type AdminServicesServiceGetAdminServicesQueryResult<
  TData = AdminServicesServiceGetAdminServicesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminServicesServiceGetAdminServicesKey =
  'AdminServicesServiceGetAdminServices';
export const UseAdminServicesServiceGetAdminServicesKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminServicesServiceGetAdminServicesKey,
  ...(queryKey ?? [{ page, paginate }]),
];
export type AdminCommissionsServiceGetAdminCommissionsDefaultResponse = Awaited<
  ReturnType<typeof AdminCommissionsService.getAdminCommissions>
>;
export type AdminCommissionsServiceGetAdminCommissionsQueryResult<
  TData = AdminCommissionsServiceGetAdminCommissionsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminCommissionsServiceGetAdminCommissionsKey =
  'AdminCommissionsServiceGetAdminCommissions';
export const UseAdminCommissionsServiceGetAdminCommissionsKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminCommissionsServiceGetAdminCommissionsKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type AdminPlatformReviewsServiceGetAdminPlatformReviewsDefaultResponse =
  Awaited<
    ReturnType<typeof AdminPlatformReviewsService.getAdminPlatformReviews>
  >;
export type AdminPlatformReviewsServiceGetAdminPlatformReviewsQueryResult<
  TData = AdminPlatformReviewsServiceGetAdminPlatformReviewsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminPlatformReviewsServiceGetAdminPlatformReviewsKey =
  'AdminPlatformReviewsServiceGetAdminPlatformReviews';
export const UseAdminPlatformReviewsServiceGetAdminPlatformReviewsKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminPlatformReviewsServiceGetAdminPlatformReviewsKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type AdminPagesServiceGetAdminPagesRightsDefaultResponse = Awaited<
  ReturnType<typeof AdminPagesService.getAdminPagesRights>
>;
export type AdminPagesServiceGetAdminPagesRightsQueryResult<
  TData = AdminPagesServiceGetAdminPagesRightsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminPagesServiceGetAdminPagesRightsKey =
  'AdminPagesServiceGetAdminPagesRights';
export const UseAdminPagesServiceGetAdminPagesRightsKeyFn = (
  queryKey?: Array<unknown>
) => [useAdminPagesServiceGetAdminPagesRightsKey, ...(queryKey ?? [])];
export type AdminPagesServiceGetAdminPagesRightsPaginatedDefaultResponse =
  Awaited<ReturnType<typeof AdminPagesService.getAdminPagesRightsPaginated>>;
export type AdminPagesServiceGetAdminPagesRightsPaginatedQueryResult<
  TData = AdminPagesServiceGetAdminPagesRightsPaginatedDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminPagesServiceGetAdminPagesRightsPaginatedKey =
  'AdminPagesServiceGetAdminPagesRightsPaginated';
export const UseAdminPagesServiceGetAdminPagesRightsPaginatedKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminPagesServiceGetAdminPagesRightsPaginatedKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type AdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansDefaultResponse =
  Awaited<
    ReturnType<
      typeof AdminProviderSubscriptionPlansService.getAdminProviderSubscriptionPlans
    >
  >;
export type AdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansQueryResult<
  TData = AdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansKey =
  'AdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlans';
export const UseAdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansKeyFn =
  (
    {
      page,
      paginate,
    }: {
      page?: number;
      paginate?: number;
    } = {},
    queryKey?: Array<unknown>
  ) => [
    useAdminProviderSubscriptionPlansServiceGetAdminProviderSubscriptionPlansKey,
    ...(queryKey ?? [
      {
        page,
        paginate,
      },
    ]),
  ];
export type AdminCityServiceServiceGetAdminCityServicesDefaultResponse =
  Awaited<ReturnType<typeof AdminCityServiceService.getAdminCityServices>>;
export type AdminCityServiceServiceGetAdminCityServicesQueryResult<
  TData = AdminCityServiceServiceGetAdminCityServicesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminCityServiceServiceGetAdminCityServicesKey =
  'AdminCityServiceServiceGetAdminCityServices';
export const UseAdminCityServiceServiceGetAdminCityServicesKeyFn = (
  {
    page,
    paginate,
    search,
  }: {
    page?: number;
    paginate?: number;
    search?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminCityServiceServiceGetAdminCityServicesKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
      search,
    },
  ]),
];
export type AdminPermissionGroupsServiceGetAdminPermissionGroupsDefaultResponse =
  Awaited<
    ReturnType<typeof AdminPermissionGroupsService.getAdminPermissionGroups>
  >;
export type AdminPermissionGroupsServiceGetAdminPermissionGroupsQueryResult<
  TData = AdminPermissionGroupsServiceGetAdminPermissionGroupsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminPermissionGroupsServiceGetAdminPermissionGroupsKey =
  'AdminPermissionGroupsServiceGetAdminPermissionGroups';
export const UseAdminPermissionGroupsServiceGetAdminPermissionGroupsKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminPermissionGroupsServiceGetAdminPermissionGroupsKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type AdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47DcfafDefaultResponse =
  Awaited<
    ReturnType<
      typeof AdminPermissionGroupsService.getAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47Dcfaf
    >
  >;
export type AdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47DcfafQueryResult<
  TData = AdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47DcfafDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47DcfafKey =
  'AdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47Dcfaf';
export const UseAdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47DcfafKeyFn =
  (queryKey?: Array<unknown>) => [
    useAdminPermissionGroupsServiceGetAdminPermissionGroups8E0Ea4E1B13645AdAa91F4D0B47DcfafKey,
    ...(queryKey ?? []),
  ];
export type AdminPermissionsServiceGetAdminPermissionsDefaultResponse = Awaited<
  ReturnType<typeof AdminPermissionsService.getAdminPermissions>
>;
export type AdminPermissionsServiceGetAdminPermissionsQueryResult<
  TData = AdminPermissionsServiceGetAdminPermissionsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminPermissionsServiceGetAdminPermissionsKey =
  'AdminPermissionsServiceGetAdminPermissions';
export const UseAdminPermissionsServiceGetAdminPermissionsKeyFn = (
  queryKey?: Array<unknown>
) => [useAdminPermissionsServiceGetAdminPermissionsKey, ...(queryKey ?? [])];
export type AdminMessagesServiceGetAdminMessagesDefaultResponse = Awaited<
  ReturnType<typeof AdminMessagesService.getAdminMessages>
>;
export type AdminMessagesServiceGetAdminMessagesQueryResult<
  TData = AdminMessagesServiceGetAdminMessagesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminMessagesServiceGetAdminMessagesKey =
  'AdminMessagesServiceGetAdminMessages';
export const UseAdminMessagesServiceGetAdminMessagesKeyFn = (
  {
    accept,
  }: {
    accept?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminMessagesServiceGetAdminMessagesKey,
  ...(queryKey ?? [{ accept }]),
];
export type AdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226DefaultResponse =
  Awaited<
    ReturnType<
      typeof AdminMessagesService.getAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226
    >
  >;
export type AdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226QueryResult<
  TData = AdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226DefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226Key =
  'AdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226';
export const UseAdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226KeyFn =
  (
    {
      accept,
    }: {
      accept?: string;
    } = {},
    queryKey?: Array<unknown>
  ) => [
    useAdminMessagesServiceGetAdminMessages8899Eddd256740B6Bcaa85Ed7D53D226Key,
    ...(queryKey ?? [{ accept }]),
  ];
export type AdminLandingSlidersServiceGetAdminSlidersDefaultResponse = Awaited<
  ReturnType<typeof AdminLandingSlidersService.getAdminSliders>
>;
export type AdminLandingSlidersServiceGetAdminSlidersQueryResult<
  TData = AdminLandingSlidersServiceGetAdminSlidersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminLandingSlidersServiceGetAdminSlidersKey =
  'AdminLandingSlidersServiceGetAdminSliders';
export const UseAdminLandingSlidersServiceGetAdminSlidersKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminLandingSlidersServiceGetAdminSlidersKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type AdminLandingHowHelpServiceGetAdminHowHelpDefaultResponse = Awaited<
  ReturnType<typeof AdminLandingHowHelpService.getAdminHowHelp>
>;
export type AdminLandingHowHelpServiceGetAdminHowHelpQueryResult<
  TData = AdminLandingHowHelpServiceGetAdminHowHelpDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminLandingHowHelpServiceGetAdminHowHelpKey =
  'AdminLandingHowHelpServiceGetAdminHowHelp';
export const UseAdminLandingHowHelpServiceGetAdminHowHelpKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminLandingHowHelpServiceGetAdminHowHelpKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type AdminLandingAboutSectionsServiceGetAdminAboutSectionsDefaultResponse =
  Awaited<
    ReturnType<typeof AdminLandingAboutSectionsService.getAdminAboutSections>
  >;
export type AdminLandingAboutSectionsServiceGetAdminAboutSectionsQueryResult<
  TData = AdminLandingAboutSectionsServiceGetAdminAboutSectionsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminLandingAboutSectionsServiceGetAdminAboutSectionsKey =
  'AdminLandingAboutSectionsServiceGetAdminAboutSections';
export const UseAdminLandingAboutSectionsServiceGetAdminAboutSectionsKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminLandingAboutSectionsServiceGetAdminAboutSectionsKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type AdminLandingDownloadSectionServiceGetAdminDownloadSectionDefaultResponse =
  Awaited<
    ReturnType<
      typeof AdminLandingDownloadSectionService.getAdminDownloadSection
    >
  >;
export type AdminLandingDownloadSectionServiceGetAdminDownloadSectionQueryResult<
  TData = AdminLandingDownloadSectionServiceGetAdminDownloadSectionDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminLandingDownloadSectionServiceGetAdminDownloadSectionKey =
  'AdminLandingDownloadSectionServiceGetAdminDownloadSection';
export const UseAdminLandingDownloadSectionServiceGetAdminDownloadSectionKeyFn =
  (queryKey?: Array<unknown>) => [
    useAdminLandingDownloadSectionServiceGetAdminDownloadSectionKey,
    ...(queryKey ?? []),
  ];
export type AdminLandingAboutServiceGetAdminAboutDefaultResponse = Awaited<
  ReturnType<typeof AdminLandingAboutService.getAdminAbout>
>;
export type AdminLandingAboutServiceGetAdminAboutQueryResult<
  TData = AdminLandingAboutServiceGetAdminAboutDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminLandingAboutServiceGetAdminAboutKey =
  'AdminLandingAboutServiceGetAdminAbout';
export const UseAdminLandingAboutServiceGetAdminAboutKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminLandingAboutServiceGetAdminAboutKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type AdminLandingSiteOfferServiceGetAdminSiteOffersDefaultResponse =
  Awaited<ReturnType<typeof AdminLandingSiteOfferService.getAdminSiteOffers>>;
export type AdminLandingSiteOfferServiceGetAdminSiteOffersQueryResult<
  TData = AdminLandingSiteOfferServiceGetAdminSiteOffersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminLandingSiteOfferServiceGetAdminSiteOffersKey =
  'AdminLandingSiteOfferServiceGetAdminSiteOffers';
export const UseAdminLandingSiteOfferServiceGetAdminSiteOffersKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminLandingSiteOfferServiceGetAdminSiteOffersKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type AdminLandingGuaranteeRightServiceGetAdminGuaranteeRightDefaultResponse =
  Awaited<
    ReturnType<typeof AdminLandingGuaranteeRightService.getAdminGuaranteeRight>
  >;
export type AdminLandingGuaranteeRightServiceGetAdminGuaranteeRightQueryResult<
  TData = AdminLandingGuaranteeRightServiceGetAdminGuaranteeRightDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminLandingGuaranteeRightServiceGetAdminGuaranteeRightKey =
  'AdminLandingGuaranteeRightServiceGetAdminGuaranteeRight';
export const UseAdminLandingGuaranteeRightServiceGetAdminGuaranteeRightKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminLandingGuaranteeRightServiceGetAdminGuaranteeRightKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type AdminLandingPartnersServiceGetAdminPartnersDefaultResponse =
  Awaited<ReturnType<typeof AdminLandingPartnersService.getAdminPartners>>;
export type AdminLandingPartnersServiceGetAdminPartnersQueryResult<
  TData = AdminLandingPartnersServiceGetAdminPartnersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminLandingPartnersServiceGetAdminPartnersKey =
  'AdminLandingPartnersServiceGetAdminPartners';
export const UseAdminLandingPartnersServiceGetAdminPartnersKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminLandingPartnersServiceGetAdminPartnersKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type AdminTicketsServiceGetAdminTicketsDefaultResponse = Awaited<
  ReturnType<typeof AdminTicketsService.getAdminTickets>
>;
export type AdminTicketsServiceGetAdminTicketsQueryResult<
  TData = AdminTicketsServiceGetAdminTicketsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminTicketsServiceGetAdminTicketsKey =
  'AdminTicketsServiceGetAdminTickets';
export const UseAdminTicketsServiceGetAdminTicketsKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  useAdminTicketsServiceGetAdminTicketsKey,
  ...(queryKey ?? [{ page, paginate }]),
];
export type AdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesDefaultResponse =
  Awaited<
    ReturnType<
      typeof AdminTicketsService.getAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessages
    >
  >;
export type AdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesQueryResult<
  TData = AdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesKey =
  'AdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessages';
export const UseAdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesKeyFn =
  (
    {
      page,
      paginate,
    }: {
      page?: number;
      paginate?: number;
    } = {},
    queryKey?: Array<unknown>
  ) => [
    useAdminTicketsServiceGetAdminTicketsFd3A3D51755b4FecBa9aA162B21188CeMessagesKey,
    ...(queryKey ?? [
      {
        page,
        paginate,
      },
    ]),
  ];
export type ClientClientOrdersServiceGetClientOrdersDefaultResponse = Awaited<
  ReturnType<typeof ClientClientOrdersService.getClientOrders>
>;
export type ClientClientOrdersServiceGetClientOrdersQueryResult<
  TData = ClientClientOrdersServiceGetClientOrdersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useClientClientOrdersServiceGetClientOrdersKey =
  'ClientClientOrdersServiceGetClientOrders';
export const UseClientClientOrdersServiceGetClientOrdersKeyFn = (
  {
    contentLanguage,
    statusArray,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    statusArray?: string;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useClientClientOrdersServiceGetClientOrdersKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      statusArray,
      xRequestedWith,
    },
  ]),
];
export type ClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224DefaultResponse =
  Awaited<
    ReturnType<
      typeof ClientClientOrdersService.getClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224
    >
  >;
export type ClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224QueryResult<
  TData = ClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224DefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224Key =
  'ClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224';
export const UseClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224KeyFn =
  (
    {
      contentLanguage,
      xRequestedWith,
    }: {
      contentLanguage?: string;
      xRequestedWith?: string;
    } = {},
    queryKey?: Array<unknown>
  ) => [
    useClientClientOrdersServiceGetClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224Key,
    ...(queryKey ?? [
      {
        contentLanguage,
        xRequestedWith,
      },
    ]),
  ];
export type ClientServicesServiceGetClientServicesDefaultResponse = Awaited<
  ReturnType<typeof ClientServicesService.getClientServices>
>;
export type ClientServicesServiceGetClientServicesQueryResult<
  TData = ClientServicesServiceGetClientServicesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useClientServicesServiceGetClientServicesKey =
  'ClientServicesServiceGetClientServices';
export const UseClientServicesServiceGetClientServicesKeyFn = (
  {
    contentLanguage,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useClientServicesServiceGetClientServicesKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      xRequestedWith,
    },
  ]),
];
export type ProviderProviderSubscriptionServiceGetProviderSubscriptionPlansDefaultResponse =
  Awaited<
    ReturnType<
      typeof ProviderProviderSubscriptionService.getProviderSubscriptionPlans
    >
  >;
export type ProviderProviderSubscriptionServiceGetProviderSubscriptionPlansQueryResult<
  TData = ProviderProviderSubscriptionServiceGetProviderSubscriptionPlansDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useProviderProviderSubscriptionServiceGetProviderSubscriptionPlansKey =
  'ProviderProviderSubscriptionServiceGetProviderSubscriptionPlans';
export const UseProviderProviderSubscriptionServiceGetProviderSubscriptionPlansKeyFn =
  (
    {
      contentLanguage,
      paginate,
      xRequestedWith,
    }: {
      contentLanguage?: string;
      paginate?: number;
      xRequestedWith?: string;
    } = {},
    queryKey?: Array<unknown>
  ) => [
    useProviderProviderSubscriptionServiceGetProviderSubscriptionPlansKey,
    ...(queryKey ?? [
      {
        contentLanguage,
        paginate,
        xRequestedWith,
      },
    ]),
  ];
export type ProviderProviderSubscriptionServiceGetProviderSubscriptionCheckDefaultResponse =
  Awaited<
    ReturnType<
      typeof ProviderProviderSubscriptionService.getProviderSubscriptionCheck
    >
  >;
export type ProviderProviderSubscriptionServiceGetProviderSubscriptionCheckQueryResult<
  TData = ProviderProviderSubscriptionServiceGetProviderSubscriptionCheckDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useProviderProviderSubscriptionServiceGetProviderSubscriptionCheckKey =
  'ProviderProviderSubscriptionServiceGetProviderSubscriptionCheck';
export const UseProviderProviderSubscriptionServiceGetProviderSubscriptionCheckKeyFn =
  (
    {
      contentLanguage,
      xRequestedWith,
    }: {
      contentLanguage?: string;
      xRequestedWith?: string;
    } = {},
    queryKey?: Array<unknown>
  ) => [
    useProviderProviderSubscriptionServiceGetProviderSubscriptionCheckKey,
    ...(queryKey ?? [
      {
        contentLanguage,
        xRequestedWith,
      },
    ]),
  ];
export type ProviderProviderProfileServiceGetProviderProfileDefaultResponse =
  Awaited<ReturnType<typeof ProviderProviderProfileService.getProviderProfile>>;
export type ProviderProviderProfileServiceGetProviderProfileQueryResult<
  TData = ProviderProviderProfileServiceGetProviderProfileDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useProviderProviderProfileServiceGetProviderProfileKey =
  'ProviderProviderProfileServiceGetProviderProfile';
export const UseProviderProviderProfileServiceGetProviderProfileKeyFn = (
  {
    contentLanguage,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useProviderProviderProfileServiceGetProviderProfileKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      xRequestedWith,
    },
  ]),
];
export type ProviderProviderProfileServiceGetProviderMeDefaultResponse =
  Awaited<ReturnType<typeof ProviderProviderProfileService.getProviderMe>>;
export type ProviderProviderProfileServiceGetProviderMeQueryResult<
  TData = ProviderProviderProfileServiceGetProviderMeDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useProviderProviderProfileServiceGetProviderMeKey =
  'ProviderProviderProfileServiceGetProviderMe';
export const UseProviderProviderProfileServiceGetProviderMeKeyFn = (
  {
    contentLanguage,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useProviderProviderProfileServiceGetProviderMeKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      xRequestedWith,
    },
  ]),
];
export type ProviderProviderProfileServiceGetProviderF84Fd31930E54Ea49C2881B822045EbcDefaultResponse =
  Awaited<
    ReturnType<
      typeof ProviderProviderProfileService.getProviderF84Fd31930E54Ea49C2881B822045Ebc
    >
  >;
export type ProviderProviderProfileServiceGetProviderF84Fd31930E54Ea49C2881B822045EbcQueryResult<
  TData = ProviderProviderProfileServiceGetProviderF84Fd31930E54Ea49C2881B822045EbcDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useProviderProviderProfileServiceGetProviderF84Fd31930E54Ea49C2881B822045EbcKey =
  'ProviderProviderProfileServiceGetProviderF84Fd31930E54Ea49C2881B822045Ebc';
export const UseProviderProviderProfileServiceGetProviderF84Fd31930E54Ea49C2881B822045EbcKeyFn =
  (
    {
      contentLanguage,
      xRequestedWith,
    }: {
      contentLanguage?: string;
      xRequestedWith?: string;
    } = {},
    queryKey?: Array<unknown>
  ) => [
    useProviderProviderProfileServiceGetProviderF84Fd31930E54Ea49C2881B822045EbcKey,
    ...(queryKey ?? [
      {
        contentLanguage,
        xRequestedWith,
      },
    ]),
  ];
export type ProviderProviderProfileServiceGetProviderSearchDefaultResponse =
  Awaited<ReturnType<typeof ProviderProviderProfileService.getProviderSearch>>;
export type ProviderProviderProfileServiceGetProviderSearchQueryResult<
  TData = ProviderProviderProfileServiceGetProviderSearchDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useProviderProviderProfileServiceGetProviderSearchKey =
  'ProviderProviderProfileServiceGetProviderSearch';
export const UseProviderProviderProfileServiceGetProviderSearchKeyFn = (
  {
    contentLanguage,
    lat,
    lng,
    paginate,
    sort,
    type,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    lat?: number;
    lng?: number;
    paginate?: number;
    sort?: string;
    type?: string;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useProviderProviderProfileServiceGetProviderSearchKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      lat,
      lng,
      paginate,
      sort,
      type,
      xRequestedWith,
    },
  ]),
];
export type ProviderProviderOrdersServiceGetProviderOrdersDefaultResponse =
  Awaited<ReturnType<typeof ProviderProviderOrdersService.getProviderOrders>>;
export type ProviderProviderOrdersServiceGetProviderOrdersQueryResult<
  TData = ProviderProviderOrdersServiceGetProviderOrdersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useProviderProviderOrdersServiceGetProviderOrdersKey =
  'ProviderProviderOrdersServiceGetProviderOrders';
export const UseProviderProviderOrdersServiceGetProviderOrdersKeyFn = (
  {
    contentLanguage,
    status,
    xRequestedWith,
  }: {
    contentLanguage?: string;
    status?: string;
    xRequestedWith?: string;
  } = {},
  queryKey?: Array<unknown>
) => [
  useProviderProviderOrdersServiceGetProviderOrdersKey,
  ...(queryKey ?? [
    {
      contentLanguage,
      status,
      xRequestedWith,
    },
  ]),
];
export type ProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186DefaultResponse =
  Awaited<
    ReturnType<
      typeof ProviderProviderOrdersService.getProviderOrders1D9De514C4E149878Eb90909556C7186
    >
  >;
export type ProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186QueryResult<
  TData = ProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186DefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186Key =
  'ProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186';
export const UseProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186KeyFn =
  (
    {
      contentLanguage,
      xRequestedWith,
    }: {
      contentLanguage?: string;
      xRequestedWith?: string;
    } = {},
    queryKey?: Array<unknown>
  ) => [
    useProviderProviderOrdersServiceGetProviderOrders1D9De514C4E149878Eb90909556C7186Key,
    ...(queryKey ?? [
      {
        contentLanguage,
        xRequestedWith,
      },
    ]),
  ];
export type PagesServiceGetPagesHowWeHelpDefaultResponse = Awaited<
  ReturnType<typeof PagesService.getPagesHowWeHelp>
>;
export type PagesServiceGetPagesHowWeHelpQueryResult<
  TData = PagesServiceGetPagesHowWeHelpDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const usePagesServiceGetPagesHowWeHelpKey =
  'PagesServiceGetPagesHowWeHelp';
export const UsePagesServiceGetPagesHowWeHelpKeyFn = (
  queryKey?: Array<unknown>
) => [usePagesServiceGetPagesHowWeHelpKey, ...(queryKey ?? [])];
export type PagesServiceGetPagesRightsPaginatedDefaultResponse = Awaited<
  ReturnType<typeof PagesService.getPagesRightsPaginated>
>;
export type PagesServiceGetPagesRightsPaginatedQueryResult<
  TData = PagesServiceGetPagesRightsPaginatedDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const usePagesServiceGetPagesRightsPaginatedKey =
  'PagesServiceGetPagesRightsPaginated';
export const UsePagesServiceGetPagesRightsPaginatedKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  usePagesServiceGetPagesRightsPaginatedKey,
  ...(queryKey ?? [{ page, paginate }]),
];
export type PlatformReviewsServiceGetPlatformReviewsDefaultResponse = Awaited<
  ReturnType<typeof PlatformReviewsService.getPlatformReviews>
>;
export type PlatformReviewsServiceGetPlatformReviewsQueryResult<
  TData = PlatformReviewsServiceGetPlatformReviewsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const usePlatformReviewsServiceGetPlatformReviewsKey =
  'PlatformReviewsServiceGetPlatformReviews';
export const UsePlatformReviewsServiceGetPlatformReviewsKeyFn = (
  {
    page,
    paginate,
  }: {
    page?: number;
    paginate?: number;
  } = {},
  queryKey?: Array<unknown>
) => [
  usePlatformReviewsServiceGetPlatformReviewsKey,
  ...(queryKey ?? [
    {
      page,
      paginate,
    },
  ]),
];
export type MessagesServiceGetMessagesDefaultResponse = Awaited<
  ReturnType<typeof MessagesService.getMessages>
>;
export type MessagesServiceGetMessagesQueryResult<
  TData = MessagesServiceGetMessagesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useMessagesServiceGetMessagesKey = 'MessagesServiceGetMessages';
export const UseMessagesServiceGetMessagesKeyFn = (
  {
    accept,
  }: {
    accept?: string;
  } = {},
  queryKey?: Array<unknown>
) => [useMessagesServiceGetMessagesKey, ...(queryKey ?? [{ accept }])];
export type LandingServiceGetLandingSlidersDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingSliders>
>;
export type LandingServiceGetLandingSlidersQueryResult<
  TData = LandingServiceGetLandingSlidersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingSlidersKey =
  'LandingServiceGetLandingSliders';
export const UseLandingServiceGetLandingSlidersKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingSlidersKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingServicesDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingServices>
>;
export type LandingServiceGetLandingServicesQueryResult<
  TData = LandingServiceGetLandingServicesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingServicesKey =
  'LandingServiceGetLandingServices';
export const UseLandingServiceGetLandingServicesKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingServicesKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingSiteOffersDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingSiteOffers>
>;
export type LandingServiceGetLandingSiteOffersQueryResult<
  TData = LandingServiceGetLandingSiteOffersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingSiteOffersKey =
  'LandingServiceGetLandingSiteOffers';
export const UseLandingServiceGetLandingSiteOffersKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingSiteOffersKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingPlansDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingPlans>
>;
export type LandingServiceGetLandingPlansQueryResult<
  TData = LandingServiceGetLandingPlansDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingPlansKey =
  'LandingServiceGetLandingPlans';
export const UseLandingServiceGetLandingPlansKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingPlansKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingHowHelpDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingHowHelp>
>;
export type LandingServiceGetLandingHowHelpQueryResult<
  TData = LandingServiceGetLandingHowHelpDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingHowHelpKey =
  'LandingServiceGetLandingHowHelp';
export const UseLandingServiceGetLandingHowHelpKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingHowHelpKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingAboutSectionsDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingAboutSections>
>;
export type LandingServiceGetLandingAboutSectionsQueryResult<
  TData = LandingServiceGetLandingAboutSectionsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingAboutSectionsKey =
  'LandingServiceGetLandingAboutSections';
export const UseLandingServiceGetLandingAboutSectionsKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingAboutSectionsKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingDownloadSectionDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingDownloadSection>
>;
export type LandingServiceGetLandingDownloadSectionQueryResult<
  TData = LandingServiceGetLandingDownloadSectionDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingDownloadSectionKey =
  'LandingServiceGetLandingDownloadSection';
export const UseLandingServiceGetLandingDownloadSectionKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingDownloadSectionKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingGuaranteeRightsDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingGuaranteeRights>
>;
export type LandingServiceGetLandingGuaranteeRightsQueryResult<
  TData = LandingServiceGetLandingGuaranteeRightsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingGuaranteeRightsKey =
  'LandingServiceGetLandingGuaranteeRights';
export const UseLandingServiceGetLandingGuaranteeRightsKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingGuaranteeRightsKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingPlatformReviewsDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingPlatformReviews>
>;
export type LandingServiceGetLandingPlatformReviewsQueryResult<
  TData = LandingServiceGetLandingPlatformReviewsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingPlatformReviewsKey =
  'LandingServiceGetLandingPlatformReviews';
export const UseLandingServiceGetLandingPlatformReviewsKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingPlatformReviewsKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingPartnersDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingPartners>
>;
export type LandingServiceGetLandingPartnersQueryResult<
  TData = LandingServiceGetLandingPartnersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingPartnersKey =
  'LandingServiceGetLandingPartners';
export const UseLandingServiceGetLandingPartnersKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingPartnersKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingMostRatedProvidersDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingMostRatedProviders>
>;
export type LandingServiceGetLandingMostRatedProvidersQueryResult<
  TData = LandingServiceGetLandingMostRatedProvidersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingMostRatedProvidersKey =
  'LandingServiceGetLandingMostRatedProviders';
export const UseLandingServiceGetLandingMostRatedProvidersKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingMostRatedProvidersKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingOrdersNumbersDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingOrdersNumbers>
>;
export type LandingServiceGetLandingOrdersNumbersQueryResult<
  TData = LandingServiceGetLandingOrdersNumbersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingOrdersNumbersKey =
  'LandingServiceGetLandingOrdersNumbers';
export const UseLandingServiceGetLandingOrdersNumbersKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingOrdersNumbersKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingContactDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingContact>
>;
export type LandingServiceGetLandingContactQueryResult<
  TData = LandingServiceGetLandingContactDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingContactKey =
  'LandingServiceGetLandingContact';
export const UseLandingServiceGetLandingContactKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingContactKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingAboutDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingAbout>
>;
export type LandingServiceGetLandingAboutQueryResult<
  TData = LandingServiceGetLandingAboutDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingAboutKey =
  'LandingServiceGetLandingAbout';
export const UseLandingServiceGetLandingAboutKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingAboutKey, ...(queryKey ?? [])];
export type LandingServiceGetLandingHowOrderDefaultResponse = Awaited<
  ReturnType<typeof LandingService.getLandingHowOrder>
>;
export type LandingServiceGetLandingHowOrderQueryResult<
  TData = LandingServiceGetLandingHowOrderDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useLandingServiceGetLandingHowOrderKey =
  'LandingServiceGetLandingHowOrder';
export const UseLandingServiceGetLandingHowOrderKeyFn = (
  queryKey?: Array<unknown>
) => [useLandingServiceGetLandingHowOrderKey, ...(queryKey ?? [])];
export type AuthenticationServicePostSharedAuthRegisterMutationResult = Awaited<
  ReturnType<typeof AuthenticationService.postSharedAuthRegister>
>;
export type AuthenticationServicePostSharedAuthSendOtpMutationResult = Awaited<
  ReturnType<typeof AuthenticationService.postSharedAuthSendOtp>
>;
export type AuthenticationServicePostSharedAuthVerifyOtpMutationResult =
  Awaited<ReturnType<typeof AuthenticationService.postSharedAuthVerifyOtp>>;
export type AuthenticationServicePostSharedAuthLogoutMutationResult = Awaited<
  ReturnType<typeof AuthenticationService.postSharedAuthLogout>
>;
export type AuthenticationServicePostSharedAuthEditProfileMutationResult =
  Awaited<ReturnType<typeof AuthenticationService.postSharedAuthEditProfile>>;
export type AuthenticationServicePostSharedAuthChangePhoneMutationResult =
  Awaited<ReturnType<typeof AuthenticationService.postSharedAuthChangePhone>>;
export type AuthenticationServicePostSharedAuthVerifyChangePhoneMutationResult =
  Awaited<
    ReturnType<typeof AuthenticationService.postSharedAuthVerifyChangePhone>
  >;
export type OrderSparePartServicePostClientOrderSparePartMutationResult =
  Awaited<ReturnType<typeof OrderSparePartService.postClientOrderSparePart>>;
export type ChatServicePostChatMutationResult = Awaited<
  ReturnType<typeof ChatService.postChat>
>;
export type ChatServicePostChatMessageMutationResult = Awaited<
  ReturnType<typeof ChatService.postChatMessage>
>;
export type TicketServicePostTicketMutationResult = Awaited<
  ReturnType<typeof TicketService.postTicket>
>;
export type TicketServicePostTicketMessageMutationResult = Awaited<
  ReturnType<typeof TicketService.postTicketMessage>
>;
export type CallServicePostCallMakeMutationResult = Awaited<
  ReturnType<typeof CallService.postCallMake>
>;
export type CallServicePostCallAcceptMutationResult = Awaited<
  ReturnType<typeof CallService.postCallAccept>
>;
export type CallServicePostCallRefuseMutationResult = Awaited<
  ReturnType<typeof CallService.postCallRefuse>
>;
export type CallServicePostCallEndMutationResult = Awaited<
  ReturnType<typeof CallService.postCallEnd>
>;
export type NotificationServicePostNotificationMarkAsReadMutationResult =
  Awaited<ReturnType<typeof NotificationService.postNotificationMarkAsRead>>;
export type AdminSettingServicePostAdminSettingMutationResult = Awaited<
  ReturnType<typeof AdminSettingService.postAdminSetting>
>;
export type AdminCitiesServicePostAdminCitiesMutationResult = Awaited<
  ReturnType<typeof AdminCitiesService.postAdminCities>
>;
export type AdminCitiesServicePostAdminCities0E3685698D074EfbA367182Dd5E2Db42StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminCitiesService.postAdminCities0E3685698D074EfbA367182Dd5E2Db42Stop
    >
  >;
export type AdminCitiesServicePostAdminCities0E3685698D074EfbA367182Dd5E2Db42RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminCitiesService.postAdminCities0E3685698D074EfbA367182Dd5E2Db42Restore
    >
  >;
export type AdminProviderProfilesServicePostAdminProviderProfilesVerify09D88C1dFd8a424d9E7cA5D2391Cdbd3MutationResult =
  Awaited<
    ReturnType<
      typeof AdminProviderProfilesService.postAdminProviderProfilesVerify09D88C1dFd8a424d9E7cA5D2391Cdbd3
    >
  >;
export type AdminProviderProfilesServicePostAdminProviderProfilesDecline02B915A75A5647118B4aEb110408A090MutationResult =
  Awaited<
    ReturnType<
      typeof AdminProviderProfilesService.postAdminProviderProfilesDecline02B915A75A5647118B4aEb110408A090
    >
  >;
export type AdminProviderProfilesServicePostAdminProviderProfilesStop02B915A75A5647118B4aEb110408A090MutationResult =
  Awaited<
    ReturnType<
      typeof AdminProviderProfilesService.postAdminProviderProfilesStop02B915A75A5647118B4aEb110408A090
    >
  >;
export type AdminProviderProfilesServicePostAdminProviderProfilesRestore02B915A75A5647118B4aEb110408A090MutationResult =
  Awaited<
    ReturnType<
      typeof AdminProviderProfilesService.postAdminProviderProfilesRestore02B915A75A5647118B4aEb110408A090
    >
  >;
export type AdminUsersServicePostAdminUsersMutationResult = Awaited<
  ReturnType<typeof AdminUsersService.postAdminUsers>
>;
export type AdminUsersServicePostAdminUsers0E3685698D074EfbA367182Dd5E2Db42StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminUsersService.postAdminUsers0E3685698D074EfbA367182Dd5E2Db42Stop
    >
  >;
export type AdminUsersServicePostAdminUsers0E3685698D074EfbA367182Dd5E2Db42RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminUsersService.postAdminUsers0E3685698D074EfbA367182Dd5E2Db42Restore
    >
  >;
export type AdminMessageTemplatesServicePostAdminMessageTemplates5MutationResult =
  Awaited<
    ReturnType<typeof AdminMessageTemplatesService.postAdminMessageTemplates5>
  >;
export type AdminServicesServicePostAdminServicesMutationResult = Awaited<
  ReturnType<typeof AdminServicesService.postAdminServices>
>;
export type AdminServicesServicePostAdminServicesB11D171dEec14474A3D26Ef6881023AeMutationResult =
  Awaited<
    ReturnType<
      typeof AdminServicesService.postAdminServicesB11D171dEec14474A3D26Ef6881023Ae
    >
  >;
export type AdminServicesServicePostAdminServicesD48C07F9B8B846D98B3c3Ba8Fcdbe611StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminServicesService.postAdminServicesD48C07F9B8B846D98B3c3Ba8Fcdbe611Stop
    >
  >;
export type AdminServicesServicePostAdminServicesD48C07F9B8B846D98B3c3Ba8Fcdbe611RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminServicesService.postAdminServicesD48C07F9B8B846D98B3c3Ba8Fcdbe611Restore
    >
  >;
export type AdminCommissionsServicePostAdminCommissionsMutationResult = Awaited<
  ReturnType<typeof AdminCommissionsService.postAdminCommissions>
>;
export type AdminCommissionsServicePostAdminCommissionsD48C07F9B8B846D98B3c3Ba8Fcdbe611StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminCommissionsService.postAdminCommissionsD48C07F9B8B846D98B3c3Ba8Fcdbe611Stop
    >
  >;
export type AdminCommissionsServicePostAdminCommissionsD48C07F9B8B846D98B3c3Ba8Fcdbe611RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminCommissionsService.postAdminCommissionsD48C07F9B8B846D98B3c3Ba8Fcdbe611Restore
    >
  >;
export type AdminPlatformReviewsServicePostAdminPlatformReviewsMutationResult =
  Awaited<
    ReturnType<typeof AdminPlatformReviewsService.postAdminPlatformReviews>
  >;
export type AdminPlatformReviewsServicePostAdminPlatformReviews5MutationResult =
  Awaited<
    ReturnType<typeof AdminPlatformReviewsService.postAdminPlatformReviews5>
  >;
export type AdminPlatformReviewsServicePostAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminPlatformReviewsService.postAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330Stop
    >
  >;
export type AdminPlatformReviewsServicePostAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminPlatformReviewsService.postAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330Restore
    >
  >;
export type AdminPagesServicePostAdminPagesMutationResult = Awaited<
  ReturnType<typeof AdminPagesService.postAdminPages>
>;
export type AdminPagesServicePostAdminPages5MutationResult = Awaited<
  ReturnType<typeof AdminPagesService.postAdminPages5>
>;
export type AdminProviderSubscriptionPlansServicePostAdminProviderSubscriptionPlansMutationResult =
  Awaited<
    ReturnType<
      typeof AdminProviderSubscriptionPlansService.postAdminProviderSubscriptionPlans
    >
  >;
export type AdminProviderSubscriptionPlansServicePostAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704MutationResult =
  Awaited<
    ReturnType<
      typeof AdminProviderSubscriptionPlansService.postAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704
    >
  >;
export type AdminProviderSubscriptionPlansServicePostAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminProviderSubscriptionPlansService.postAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704Stop
    >
  >;
export type AdminProviderSubscriptionPlansServicePostAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminProviderSubscriptionPlansService.postAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704Restore
    >
  >;
export type AdminCityServiceServicePostAdminCityServicesAttachMutationResult =
  Awaited<
    ReturnType<typeof AdminCityServiceService.postAdminCityServicesAttach>
  >;
export type AdminCityServiceServicePostAdminCityServicesDetachMutationResult =
  Awaited<
    ReturnType<typeof AdminCityServiceService.postAdminCityServicesDetach>
  >;
export type AdminCityServiceServicePostAdminCityServices0E3685698D074EfbA367182Dd5E2Db42StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminCityServiceService.postAdminCityServices0E3685698D074EfbA367182Dd5E2Db42Stop
    >
  >;
export type AdminCityServiceServicePostAdminCityServices0E3685698D074EfbA367182Dd5E2Db42RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminCityServiceService.postAdminCityServices0E3685698D074EfbA367182Dd5E2Db42Restore
    >
  >;
export type AdminAuthServicePostAdminAuthLoginMutationResult = Awaited<
  ReturnType<typeof AdminAuthService.postAdminAuthLogin>
>;
export type AdminAuthServicePostAdminAuthLogoutMutationResult = Awaited<
  ReturnType<typeof AdminAuthService.postAdminAuthLogout>
>;
export type AdminCustomNotificationServicePostAdminCustomNotificationMutationResult =
  Awaited<
    ReturnType<
      typeof AdminCustomNotificationService.postAdminCustomNotification
    >
  >;
export type AdminPermissionGroupsServicePostAdminPermissionGroupsMutationResult =
  Awaited<
    ReturnType<typeof AdminPermissionGroupsService.postAdminPermissionGroups>
  >;
export type AdminPermissionGroupsServicePostAdminPermissionGroupsD814419d755547108E26Efeb66Fc8Fc2MutationResult =
  Awaited<
    ReturnType<
      typeof AdminPermissionGroupsService.postAdminPermissionGroupsD814419d755547108E26Efeb66Fc8Fc2
    >
  >;
export type AdminPermissionGroupsServicePostAdminPermissionGroups0E3685698D074EfbA367182Dd5E2Db42StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminPermissionGroupsService.postAdminPermissionGroups0E3685698D074EfbA367182Dd5E2Db42Stop
    >
  >;
export type AdminPermissionGroupsServicePostAdminPermissionGroups0E3685698D074EfbA367182Dd5E2Db42RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminPermissionGroupsService.postAdminPermissionGroups0E3685698D074EfbA367182Dd5E2Db42Restore
    >
  >;
export type AdminMessagesServicePostAdminMessagesReply8899Eddd256740B6Bcaa85Ed7D53D226MutationResult =
  Awaited<
    ReturnType<
      typeof AdminMessagesService.postAdminMessagesReply8899Eddd256740B6Bcaa85Ed7D53D226
    >
  >;
export type AdminMessagesServicePostAdminMessagesDelete6Aa8Ddfc861c4C42B7C406Dbb20627AdMutationResult =
  Awaited<
    ReturnType<
      typeof AdminMessagesService.postAdminMessagesDelete6Aa8Ddfc861c4C42B7C406Dbb20627Ad
    >
  >;
export type AdminLandingSlidersServicePostAdminSlidersMutationResult = Awaited<
  ReturnType<typeof AdminLandingSlidersService.postAdminSliders>
>;
export type AdminLandingSlidersServicePostAdminSliders726A81EcD9B543Ad946bB77470B071F4MutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingSlidersService.postAdminSliders726A81EcD9B543Ad946bB77470B071F4
    >
  >;
export type AdminLandingSlidersServicePostAdminSliders726A81EcD9B543Ad946bB77470B071F4StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingSlidersService.postAdminSliders726A81EcD9B543Ad946bB77470B071F4Stop
    >
  >;
export type AdminLandingSlidersServicePostAdminSliders726A81EcD9B543Ad946bB77470B071F4RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingSlidersService.postAdminSliders726A81EcD9B543Ad946bB77470B071F4Restore
    >
  >;
export type AdminLandingHowHelpServicePostAdminHowHelpMutationResult = Awaited<
  ReturnType<typeof AdminLandingHowHelpService.postAdminHowHelp>
>;
export type AdminLandingHowHelpServicePostAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingHowHelpService.postAdminHowHelpC0E70442F1914F3cBb317Ca396D574Cd
    >
  >;
export type AdminLandingHowHelpServicePostAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdStopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingHowHelpService.postAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdStop
    >
  >;
export type AdminLandingHowHelpServicePostAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdRestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingHowHelpService.postAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdRestore
    >
  >;
export type AdminLandingAboutSectionsServicePostAdminAboutSectionsMutationResult =
  Awaited<
    ReturnType<typeof AdminLandingAboutSectionsService.postAdminAboutSections>
  >;
export type AdminLandingAboutSectionsServicePostAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingAboutSectionsService.postAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574Cd
    >
  >;
export type AdminLandingAboutSectionsServicePostAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdStopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingAboutSectionsService.postAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdStop
    >
  >;
export type AdminLandingAboutSectionsServicePostAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdRestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingAboutSectionsService.postAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdRestore
    >
  >;
export type AdminLandingDownloadSectionServicePostAdminDownloadSectionMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingDownloadSectionService.postAdminDownloadSection
    >
  >;
export type AdminLandingAboutServicePostAdminAboutStoreAboutMutationResult =
  Awaited<ReturnType<typeof AdminLandingAboutService.postAdminAboutStoreAbout>>;
export type AdminLandingAboutServicePostAdminAboutStoreHowOrderMutationResult =
  Awaited<
    ReturnType<typeof AdminLandingAboutService.postAdminAboutStoreHowOrder>
  >;
export type AdminLandingAboutServicePostAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingAboutService.postAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5Stop
    >
  >;
export type AdminLandingAboutServicePostAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingAboutService.postAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5Restore
    >
  >;
export type AdminLandingSiteOfferServicePostAdminSiteOffersMutationResult =
  Awaited<ReturnType<typeof AdminLandingSiteOfferService.postAdminSiteOffers>>;
export type AdminLandingSiteOfferServicePostAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210MutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingSiteOfferService.postAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210
    >
  >;
export type AdminLandingSiteOfferServicePostAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingSiteOfferService.postAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210Stop
    >
  >;
export type AdminLandingSiteOfferServicePostAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingSiteOfferService.postAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210Restore
    >
  >;
export type AdminLandingGuaranteeRightServicePostAdminGuaranteeRightMutationResult =
  Awaited<
    ReturnType<typeof AdminLandingGuaranteeRightService.postAdminGuaranteeRight>
  >;
export type AdminLandingGuaranteeRightServicePostAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33MutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingGuaranteeRightService.postAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33
    >
  >;
export type AdminLandingGuaranteeRightServicePostAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingGuaranteeRightService.postAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33Stop
    >
  >;
export type AdminLandingGuaranteeRightServicePostAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingGuaranteeRightService.postAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33Restore
    >
  >;
export type AdminLandingPartnersServicePostAdminPartnersMutationResult =
  Awaited<ReturnType<typeof AdminLandingPartnersService.postAdminPartners>>;
export type AdminLandingPartnersServicePostAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7MutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingPartnersService.postAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7
    >
  >;
export type AdminLandingPartnersServicePostAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7StopMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingPartnersService.postAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7Stop
    >
  >;
export type AdminLandingPartnersServicePostAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7RestoreMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingPartnersService.postAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7Restore
    >
  >;
export type AdminTicketsServicePostAdminTicketsSendMessageMutationResult =
  Awaited<ReturnType<typeof AdminTicketsService.postAdminTicketsSendMessage>>;
export type ClientClientOrdersServicePostClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224ConfirmDeliveryMutationResult =
  Awaited<
    ReturnType<
      typeof ClientClientOrdersService.postClientOrdersC5Ad5169F88d4Acc8D4f6C985706B224ConfirmDelivery
    >
  >;
export type ClientClientOrdersServicePostClientOrderRateMutationResult =
  Awaited<ReturnType<typeof ClientClientOrdersService.postClientOrderRate>>;
export type ClientClientOfferServicePostClientOffer96Be9E84956a429889Bd9Bd3C58E251eAcceptMutationResult =
  Awaited<
    ReturnType<
      typeof ClientClientOfferService.postClientOffer96Be9E84956a429889Bd9Bd3C58E251eAccept
    >
  >;
export type ProviderProviderSubscriptionServicePostProviderSubscriptionSubscribeMutationResult =
  Awaited<
    ReturnType<
      typeof ProviderProviderSubscriptionService.postProviderSubscriptionSubscribe
    >
  >;
export type ProviderProviderProfileServicePostProviderProfileMutationResult =
  Awaited<
    ReturnType<typeof ProviderProviderProfileService.postProviderProfile>
  >;
export type ProviderProviderOrdersServicePostProviderOrderRateMutationResult =
  Awaited<
    ReturnType<typeof ProviderProviderOrdersService.postProviderOrderRate>
  >;
export type ProviderProviderOrdersServicePostProviderOrdersC5Ad5169F88d4Acc8D4f6C985706B224ConfirmDeliveryMutationResult =
  Awaited<
    ReturnType<
      typeof ProviderProviderOrdersService.postProviderOrdersC5Ad5169F88d4Acc8D4f6C985706B224ConfirmDelivery
    >
  >;
export type ProviderProviderOfferServicePostProviderOfferMutationResult =
  Awaited<ReturnType<typeof ProviderProviderOfferService.postProviderOffer>>;
export type MessagesServicePostMessagesSendMutationResult = Awaited<
  ReturnType<typeof MessagesService.postMessagesSend>
>;
export type AuthenticationServicePutSharedAuthUpdateSettingsMutationResult =
  Awaited<ReturnType<typeof AuthenticationService.putSharedAuthUpdateSettings>>;
export type AdminCitiesServicePutAdminCities81A53C0640694120B9Ae6A4314Cd4AdaMutationResult =
  Awaited<
    ReturnType<
      typeof AdminCitiesService.putAdminCities81A53C0640694120B9Ae6A4314Cd4Ada
    >
  >;
export type AdminUsersServicePutAdminUsersB2Ef1C4f918a4F349D2f97Ce28C2772FMutationResult =
  Awaited<
    ReturnType<
      typeof AdminUsersService.putAdminUsersB2Ef1C4f918a4F349D2f97Ce28C2772F
    >
  >;
export type AdminCommissionsServicePutAdminCommissions51A7447f3Bfd4E89A7F31969C8Fb9330MutationResult =
  Awaited<
    ReturnType<
      typeof AdminCommissionsService.putAdminCommissions51A7447f3Bfd4E89A7F31969C8Fb9330
    >
  >;
export type AdminCityServiceServicePutAdminCityServices13MutationResult =
  Awaited<ReturnType<typeof AdminCityServiceService.putAdminCityServices13>>;
export type ProviderProviderProfileServicePutProviderProfileMutationResult =
  Awaited<ReturnType<typeof ProviderProviderProfileService.putProviderProfile>>;
export type AdminCitiesServiceDeleteAdminCitiesB4A072761Baf43B08068C03Fdabf2626MutationResult =
  Awaited<
    ReturnType<
      typeof AdminCitiesService.deleteAdminCitiesB4A072761Baf43B08068C03Fdabf2626
    >
  >;
export type AdminUsersServiceDeleteAdminUsersB4A072761Baf43B08068C03Fdabf2626MutationResult =
  Awaited<
    ReturnType<
      typeof AdminUsersService.deleteAdminUsersB4A072761Baf43B08068C03Fdabf2626
    >
  >;
export type AdminServicesServiceDeleteAdminServicesB4A072761Baf43B08068C03Fdabf2626MutationResult =
  Awaited<
    ReturnType<
      typeof AdminServicesService.deleteAdminServicesB4A072761Baf43B08068C03Fdabf2626
    >
  >;
export type AdminCommissionsServiceDeleteAdminCommissions51A7447f3Bfd4E89A7F31969C8Fb9330MutationResult =
  Awaited<
    ReturnType<
      typeof AdminCommissionsService.deleteAdminCommissions51A7447f3Bfd4E89A7F31969C8Fb9330
    >
  >;
export type AdminPlatformReviewsServiceDeleteAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330MutationResult =
  Awaited<
    ReturnType<
      typeof AdminPlatformReviewsService.deleteAdminPlatformReviews51A7447f3Bfd4E89A7F31969C8Fb9330
    >
  >;
export type AdminPagesServiceDeleteAdminPages51A7447f3Bfd4E89A7F31969C8Fb9330MutationResult =
  Awaited<
    ReturnType<
      typeof AdminPagesService.deleteAdminPages51A7447f3Bfd4E89A7F31969C8Fb9330
    >
  >;
export type AdminProviderSubscriptionPlansServiceDeleteAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704MutationResult =
  Awaited<
    ReturnType<
      typeof AdminProviderSubscriptionPlansService.deleteAdminProviderSubscriptionPlans945B42FcA2794Ac58C0077E635C87704
    >
  >;
export type AdminPermissionGroupsServiceDeleteAdminPermissionGroups51A7447f3Bfd4E89A7F31969C8Fb9330MutationResult =
  Awaited<
    ReturnType<
      typeof AdminPermissionGroupsService.deleteAdminPermissionGroups51A7447f3Bfd4E89A7F31969C8Fb9330
    >
  >;
export type AdminLandingSlidersServiceDeleteAdminSliders6193D4CdCe8e4B79Ba467E3C086206F3MutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingSlidersService.deleteAdminSliders6193D4CdCe8e4B79Ba467E3C086206F3
    >
  >;
export type AdminLandingHowHelpServiceDeleteAdminHowHelpC0E70442F1914F3cBb317Ca396D574CdMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingHowHelpService.deleteAdminHowHelpC0E70442F1914F3cBb317Ca396D574Cd
    >
  >;
export type AdminLandingAboutSectionsServiceDeleteAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574CdMutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingAboutSectionsService.deleteAdminAboutSectionsC0E70442F1914F3cBb317Ca396D574Cd
    >
  >;
export type AdminLandingAboutServiceDeleteAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5MutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingAboutService.deleteAdminAbout7Ad421Cd90754A74B2E1E4298A1Dc2B5
    >
  >;
export type AdminLandingSiteOfferServiceDeleteAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210MutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingSiteOfferService.deleteAdminSiteOffersE3Ed5781465b4C16879f981812Fb6210
    >
  >;
export type AdminLandingGuaranteeRightServiceDeleteAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33MutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingGuaranteeRightService.deleteAdminGuaranteeRight716Ae479A4144E1a80A9De253B560D33
    >
  >;
export type AdminLandingPartnersServiceDeleteAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7MutationResult =
  Awaited<
    ReturnType<
      typeof AdminLandingPartnersService.deleteAdminPartners862Cfc1a45634Ac38Bb85F75Eeddd6E7
    >
  >;
