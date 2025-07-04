import type {
	Attachment,
	CodeableConcept,
	ContactPoint,
	Element,
	Extension,
	Identifier,
	Meta,
	Period,
	Reference,
} from '../core/types'
import type { Narrative } from '../narrative/types'
import type { ResourceList } from '../resourcelist/types'

/* Generated from FHIR JSON Schema */

/** The details of a healthcare service available at a location. */

export interface HealthcareService<Contained = ResourceList> {
	resourceType: `HealthcareService`
	/** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
	id?: string
	/** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
	meta?: Meta
	/** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
	implicitRules?: string

	_implicitRules?: Element
	/** The base language in which the resource is written. */
	language?: string

	_language?: Element
	/** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
	text?: Narrative
	contained?: Contained[]
	/** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** External identifiers for this item. */
	identifier?: Identifier[]
	/** This flag is used to mark the record to not be used. This is not used when a center is closed for maintenance, or for holidays, the notAvailable period is to be used for this. */
	active?: boolean

	_active?: Element
	/** The organization that provides this healthcare service. */
	providedBy?: Reference
	/** Identifies the broad category of service being performed or delivered. */
	category?: CodeableConcept[]
	/** The specific type of service that may be delivered or performed. */
	type?: CodeableConcept[]
	/** Collection of specialties handled by the service site. This is more of a medical term. */
	specialty?: CodeableConcept[]
	/** The location(s) where this healthcare service may be provided. */
	location?: Reference[]
	/** Further description of the service as it would be presented to a consumer while searching. */
	name?: string

	_name?: Element
	/** Any additional description of the service and/or any specific issues not covered by the other attributes, which can be displayed as further detail under the serviceName. */
	comment?: string

	_comment?: Element
	/** Extra details about the service that can't be placed in the other fields. */
	extraDetails?: string

	_extraDetails?: Element
	/** If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list. */
	photo?: Attachment
	/** List of contacts related to this specific healthcare service. */
	telecom?: ContactPoint[]
	/** The location(s) that this service is available to (not where the service is provided). */
	coverageArea?: Reference[]
	/** The code(s) that detail the conditions under which the healthcare service is available/offered. */
	serviceProvisionCode?: CodeableConcept[]

	eligibility?: HealthcareServiceEligibility[]
	/** Programs that this service is applicable to. */
	program?: CodeableConcept[]
	/** Collection of characteristics (attributes). */
	characteristic?: CodeableConcept[]
	/** Some services are specifically made available in multiple languages, this property permits a directory to declare the languages this is offered in. Typically this is only provided where a service operates in communities with mixed languages used. */
	communication?: CodeableConcept[]
	/** Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required. */
	referralMethod?: CodeableConcept[]
	/** Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service. */
	appointmentRequired?: boolean

	_appointmentRequired?: Element

	availableTime?: HealthcareServiceAvailableTime[]

	notAvailable?: HealthcareServiceNotAvailable[]
	/** A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times. */
	availabilityExceptions?: string

	_availabilityExceptions?: Element
	/** Technical endpoints providing access to services operated for the specific healthcare services defined at this resource. */
	endpoint?: Reference[]
}

/** The details of a healthcare service available at a location. */

export interface HealthcareServiceEligibility {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Coded value for the eligibility. */
	code?: CodeableConcept
	/** Describes the eligibility conditions for the service. */
	comment?: string

	_comment?: Element
}

/** The details of a healthcare service available at a location. */

export interface HealthcareServiceAvailableTime {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Indicates which days of the week are available between the start and end Times. */
	daysOfWeek?: ('mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')[]

	_daysOfWeek?: Element[]
	/** Is this always available? (hence times are irrelevant) e.g. 24 hour service. */
	allDay?: boolean

	_allDay?: Element
	/** The opening time of day. Note: If the AllDay flag is set, then this time is ignored. */
	availableStartTime?: string

	_availableStartTime?: Element
	/** The closing time of day. Note: If the AllDay flag is set, then this time is ignored. */
	availableEndTime?: string

	_availableEndTime?: Element
}

/** The details of a healthcare service available at a location. */

export interface HealthcareServiceNotAvailable {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** The reason that can be presented to the user as to why this time is not available. */
	description: string

	_description?: Element
	/** Service is not available (seasonally or for a public holiday) from this date. */
	during?: Period
}
