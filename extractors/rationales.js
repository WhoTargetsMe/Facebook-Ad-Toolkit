/*

This document details the different (known) targeting rationales detailed in the WAIST response
Rationales previously identified:
- Interest
- Gender
- Age (minimum)
- Age (maximum)
- Area
- Language
- Defined audience
- Lookalike audience
- Pixel audience
- Custom audience

*/

const interestRationale = {
	"__typename": "WAISTUIInterestsType",
	"id": "...",
	"serialized_data": "{\"interest_ids\":[...]}",
	"waist_ui_type": "INTERESTS",
	"interests": [{
		"name": "Forbes",
		"id": "6003728502716"
	}]
}

const languageRationale = {
  "__typename": "WAISTUILocaleType",
  "id": "...",
  "serialized_data": "{\"locales\":[15]}",
  "waist_ui_type": "LOCALE",
  "locales": ["polski"]
}

const locationRationale = {
  "__typename": "WAISTUILocationType",
  "id": "...",
  "serialized_data": "{\"location_granularity\":\"city\",\"location_geo_type\":\"home\",\"location_code\":\"1869871\"}",
  "waist_ui_type": "LOCATION",
  "location_name": "Pozna\u0144, Greater Poland Voivodeship",
  "location_type": "HOME"
}

const ageGenderRationale = {
  "__typename": "WAISTUIAgeGenderType",
  "id": "...",
  "serialized_data": "{\"age_min\":10,\"age_max\":33,\"gender\":null}",
  "waist_ui_type": "AGE_GENDER",
  "age_min": 10, // Note, it's believed ages are offset by 13 years (minimum age you can join Facebook)
  "age_max": 33,
  "gender": "ANY",
  "birthday": "24\/09\/1997"
}

/*

Custom audiences are more complicated, a few examples are provided below
Different audience types can be identified by 'ca_type' inside serialized_data:

1. Unknown
2: Unknown
3: Unknown
4: CUSTOM_AUDIENCES_LOOKALIKE (https://www.facebook.com/business/help/164749007013531)
5: CUSTOM_AUDIENCES_WEBSITE (https://www.facebook.com/business/help/449542958510885)
6: Unknown
7: CUSTOM_AUDIENCES_MOBILE_APP (https://www.facebook.com/business/help/1472206006327390)
8: CUSTOM_AUDIENCES_ENGAGEMENT_VIDEO (https://www.facebook.com/business/help/1099865760056389?id=2469097953376494)
9: CUSTOM_AUDIENCES_ENGAGEMENT_LEAD_GEN (https://www.facebook.com/business/help/900802126698360?id=2469097953376494)
10: Unknown
11: CUSTOM_AUDIENCES_ENGAGEMENT_PAGE (https://www.facebook.com/business/help/1707329062853572)
12: CUSTOM_AUDIENCES_ENGAGEMENT_IG (https://www.facebook.com/business/help/214981095688584)
13: CUSTOM_AUDIENCES_ENGAGEMENT_EVENT (https://www.facebook.com/business/help/366151833804507)
14: Unknown

29: CUSTOM_AUDIENCES_UNRESOLVED (Unsure)

*/

// 4

{
	"__typename": "WAISTUICustomAudienceType",
	"id": "...",
	"serialized_data": "{\"ca_type\":4,\"ca_fbid\":...}",
	"waist_ui_type": "CUSTOM_AUDIENCES_LOOKALIKE",
	"mobile_ca_data": {
		"app_name": null,
		"event_time_string": null
	},
	"website_ca_data": {
		"website_url": null,
		"event_time_string": null
	}
}

// 5

{
	"__typename": "WAISTUICustomAudienceType",
	"id": "...",
	"serialized_data": "{\"ca_type\":5,\"ca_fbid\":...}",
	"waist_ui_type": "CUSTOM_AUDIENCES_WEBSITE",
	"mobile_ca_data": {
		"app_name": null,
		"event_time_string": null
	},
	"website_ca_data": {
		"website_url": "...",
		"event_time_string": "24 September 2019"
	}
}

// 7


{
	"__typename": "WAISTUICustomAudienceType",
	"id": "...",
	"serialized_data": "{\"ca_type\":7,\"ca_fbid\":...}",
	"waist_ui_type": "CUSTOM_AUDIENCES_MOBILE_APP",
	"mobile_ca_data": {
		"app_name": "YouSee TV & Film",
		"event_time_string": "24. sep. 2019"
	},
	"website_ca_data": {
		"website_url": null,
		"event_time_string": null
	}
}

// 8

{
	"__typename": "WAISTUICustomAudienceType",
	"id": "...",
	"serialized_data": "{\"ca_type\":8,\"ca_fbid\":...}",
	"waist_ui_type": "CUSTOM_AUDIENCES_ENGAGEMENT_VIDEO",
	"mobile_ca_data": {
		"app_name": null,
		"event_time_string": null
	},
	"website_ca_data": {
		"website_url": null,
		"event_time_string": null
	}
}

// 9

{
	"__typename": "WAISTUICustomAudienceType",
	"id": "...",
	"serialized_data": "{\"ca_type\":9,\"ca_fbid\":...}",
	"waist_ui_type": "CUSTOM_AUDIENCES_ENGAGEMENT_LEAD_GEN",
	"mobile_ca_data": {
		"app_name": null,
		"event_time_string": null
	},
	"website_ca_data": {
		"website_url": null,
		"event_time_string": null
	}
}

// 11

{
	"__typename": "WAISTUICustomAudienceType",
	"id": "...",
	"serialized_data": "{\"ca_type\":11,\"ca_fbid\":...}",
	"waist_ui_type": "CUSTOM_AUDIENCES_ENGAGEMENT_PAGE",
	"mobile_ca_data": {
		"app_name": null,
		"event_time_string": null
	},
	"website_ca_data": {
		"website_url": null,
		"event_time_string": null
	}
}

// 12

{
	"__typename": "WAISTUICustomAudienceType",
	"id": "...",
	"serialized_data": "{\"ca_type\":12,\"ca_fbid\":...}",
	"waist_ui_type": "CUSTOM_AUDIENCES_ENGAGEMENT_IG",
	"mobile_ca_data": {
		"app_name": null,
		"event_time_string": null
	},
	"website_ca_data": {
		"website_url": null,
		"event_time_string": null
	}
}

// 13

{
	"__typename": "WAISTUICustomAudienceType",
	"id": "...",
	"serialized_data": "{\"ca_type\":13,\"ca_fbid\":...}",
	"waist_ui_type": "CUSTOM_AUDIENCES_ENGAGEMENT_EVENT",
	"mobile_ca_data": {
		"app_name": null,
		"event_time_string": null
	},
	"website_ca_data": {
		"website_url": null,
		"event_time_string": null
	}
}

// 29

{
	"__typename": "WAISTUICustomAudienceType",
	"id": "...",
	"serialized_data": "{\"ca_type\":29,\"ca_fbid\":...}",
	"waist_ui_type": "CUSTOM_AUDIENCES_UNRESOLVED",
	"mobile_ca_data": {
		"app_name": null,
		"event_time_string": null
	},
	"website_ca_data": {
		"website_url": null,
		"event_time_string": null
	}
}
