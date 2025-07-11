import type {
	Address,
	Attachment,
	CodeableConcept,
	Element,
	Extension,
	Identifier,
	Meta,
	Money,
	Period,
	Quantity,
	Reference,
} from '../core/types'
import type { Narrative } from '../narrative/types'
import type { ResourceList } from '../resourcelist/types'

/* Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */

export interface Claim<Contained = ResourceList> {
	resourceType: `Claim`
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
	/** A unique identifier assigned to this claim. */
	identifier?: Identifier[]
	/** The status of the resource instance. */
	status: string

	_status?: Element
	/** The category of claim, e.g. oral, pharmacy, vision, institutional, professional. */
	type: CodeableConcept
	/** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service. */
	subType?: CodeableConcept
	/** A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future. */
	use: 'claim' | 'preauthorization' | 'predetermination'

	_use?: Element
	/** The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought. */
	patient: Reference
	/** The period for which charges are being submitted. */
	billablePeriod?: Period
	/** The date this resource was created. */
	created: string

	_created?: Element
	/** Individual who created the claim, predetermination or preauthorization. */
	enterer?: Reference
	/** The Insurer who is target of the request. */
	insurer?: Reference
	/** The provider which is responsible for the claim, predetermination or preauthorization. */
	provider: Reference
	/** The provider-required urgency of processing the request. Typical values include: stat, routine deferred. */
	priority: CodeableConcept
	/** A code to indicate whether and for whom funds are to be reserved for future claims. */
	fundsReserve?: CodeableConcept

	related?: ClaimRelated[]
	/** Prescription to support the dispensing of pharmacy, device or vision products. */
	prescription?: Reference
	/** Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products. */
	originalPrescription?: Reference

	payee?: ClaimPayee
	/** A reference to a referral resource. */
	referral?: Reference
	/** Facility where the services were provided. */
	facility?: Reference

	careTeam?: ClaimCareTeam[]

	supportingInfo?: ClaimSupportingInfo[]

	diagnosis?: ClaimDiagnosis[]

	procedure?: ClaimProcedure[]

	insurance: ClaimInsurance[]

	accident?: ClaimAccident

	item?: ClaimItem[]
	/** The total value of the all the items in the claim. */
	total?: Money
}

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */

export interface ClaimRelated {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Reference to a related claim. */
	claim?: Reference
	/** A code to convey how the claims are related. */
	relationship?: CodeableConcept
	/** An alternate organizational reference to the case or file to which this particular claim pertains. */
	reference?: Identifier
}

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */

export interface ClaimPayee {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Type of Party to be reimbursed: subscriber, provider, other. */
	type: CodeableConcept
	/** Reference to the individual or organization to whom any payment will be made. */
	party?: Reference
}

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */

export interface ClaimCareTeam {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A number to uniquely identify care team entries. */
	sequence: number

	_sequence?: Element
	/** Member of the team who provided the product or service. */
	provider: Reference
	/** The party who is billing and/or responsible for the claimed products or services. */
	responsible?: boolean

	_responsible?: Element
	/** The lead, assisting or supervising practitioner and their discipline if a multidisciplinary team. */
	role?: CodeableConcept
	/** The qualification of the practitioner which is applicable for this service. */
	qualification?: CodeableConcept
}

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */

export interface ClaimSupportingInfo {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A number to uniquely identify supporting information entries. */
	sequence: number

	_sequence?: Element
	/** The general class of the information supplied: information; exception; accident, employment; onset, etc. */
	category: CodeableConcept
	/** System and code pertaining to the specific information regarding special conditions relating to the setting, treatment or patient  for which care is sought. */
	code?: CodeableConcept

	timingDate?: string

	_timingDate?: Element

	timingPeriod?: Period

	valueBoolean?: boolean

	_valueBoolean?: Element

	valueString?: string

	_valueString?: Element

	valueQuantity?: Quantity

	valueAttachment?: Attachment

	valueReference?: Reference
	/** Provides the reason in the situation where a reason code is required in addition to the content. */
	reason?: CodeableConcept
}

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */

export interface ClaimDiagnosis {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A number to uniquely identify diagnosis entries. */
	sequence: number

	_sequence?: Element

	diagnosisCodeableConcept?: CodeableConcept

	diagnosisReference?: Reference
	/** When the condition was observed or the relative ranking. */
	type?: CodeableConcept[]
	/** Indication of whether the diagnosis was present on admission to a facility. */
	onAdmission?: CodeableConcept
	/** A package billing code or bundle code used to group products and services to a particular health condition (such as heart attack) which is based on a predetermined grouping code system. */
	packageCode?: CodeableConcept
}

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */

export interface ClaimProcedure {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A number to uniquely identify procedure entries. */
	sequence: number

	_sequence?: Element
	/** When the condition was observed or the relative ranking. */
	type?: CodeableConcept[]
	/** Date and optionally time the procedure was performed. */
	date?: string

	_date?: Element

	procedureCodeableConcept?: CodeableConcept

	procedureReference?: Reference
	/** Unique Device Identifiers associated with this line item. */
	udi?: Reference[]
}

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */

export interface ClaimInsurance {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order. */
	sequence: number

	_sequence?: Element
	/** A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true. */
	focal: boolean

	_focal?: Element
	/** The business identifier to be used when the claim is sent for adjudication against this insurance policy. */
	identifier?: Identifier
	/** Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system. */
	coverage: Reference
	/** A business agreement number established between the provider and the insurer for special business processing purposes. */
	businessArrangement?: string

	_businessArrangement?: Element
	/** Reference numbers previously provided by the insurer to the provider to be quoted on subsequent claims containing services or products related to the prior authorization. */
	preAuthRef?: string[]

	_preAuthRef?: Element[]
	/** The result of the adjudication of the line items for the Coverage specified in this insurance. */
	claimResponse?: Reference
}

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */

export interface ClaimAccident {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Date of an accident event  related to the products and services contained in the claim. */
	date: string

	_date?: Element
	/** The type or context of the accident event for the purposes of selection of potential insurance coverages and determination of coordination between insurers. */
	type?: CodeableConcept

	locationAddress?: Address

	locationReference?: Reference
}

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */

export interface ClaimItem {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A number to uniquely identify item entries. */
	sequence: number

	_sequence?: Element
	/** CareTeam members related to this service or product. */
	careTeamSequence?: number[]

	_careTeamSequence?: Element[]
	/** Diagnosis applicable for this service or product. */
	diagnosisSequence?: number[]

	_diagnosisSequence?: Element[]
	/** Procedures applicable for this service or product. */
	procedureSequence?: number[]

	_procedureSequence?: Element[]
	/** Exceptions, special conditions and supporting information applicable for this service or product. */
	informationSequence?: number[]

	_informationSequence?: Element[]
	/** The type of revenue or cost center providing the product and/or service. */
	revenue?: CodeableConcept
	/** Code to identify the general type of benefits under which products and services are provided. */
	category?: CodeableConcept
	/** When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item. */
	productOrService: CodeableConcept
	/** Item typification or modifiers codes to convey additional context for the product or service. */
	modifier?: CodeableConcept[]
	/** Identifies the program under which this may be recovered. */
	programCode?: CodeableConcept[]

	servicedDate?: string

	_servicedDate?: Element

	servicedPeriod?: Period

	locationCodeableConcept?: CodeableConcept

	locationAddress?: Address

	locationReference?: Reference
	/** The number of repetitions of a service or product. */
	quantity?: Quantity
	/** If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group. */
	unitPrice?: Money
	/** A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount. */
	factor?: number

	_factor?: Element
	/** The quantity times the unit price for an additional service or product or charge. */
	net?: Money
	/** Unique Device Identifiers associated with this line item. */
	udi?: Reference[]
	/** Physical service site on the patient (limb, tooth, etc.). */
	bodySite?: CodeableConcept
	/** A region or surface of the bodySite, e.g. limb region or tooth surface(s). */
	subSite?: CodeableConcept[]
	/** The Encounters during which this Claim was created or to which the creation of this record is tightly associated. */
	encounter?: Reference[]

	detail?: ClaimDetail[]
}

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */

export interface ClaimDetail {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	sequence?: number

	_sequence?: Element

	revenue?: CodeableConcept

	category?: CodeableConcept

	productOrService: CodeableConcept

	modifier?: CodeableConcept[]

	programCode?: CodeableConcept[]

	quantity?: Quantity

	unitPrice?: Money

	factor?: number

	_factor?: Element

	net?: Money

	udi?: Reference[]

	subDetail?: ClaimSubDetail[]
}

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */

export interface ClaimSubDetail {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	sequence?: number

	_sequence?: Element

	revenue?: CodeableConcept

	category?: CodeableConcept

	productOrService: CodeableConcept

	modifier?: CodeableConcept[]

	programCode?: CodeableConcept[]

	quantity?: Quantity

	unitPrice?: Money

	factor?: number

	_factor?: Element

	net?: Money

	udi?: Reference[]
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponse<Contained = ResourceList> {
	resourceType: `ClaimResponse`
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
	/** A unique identifier assigned to this claim response. */
	identifier?: Identifier[]
	/** The status of the resource instance. */
	status: string

	_status?: Element
	/** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service. */
	type: CodeableConcept
	/** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service. */
	subType?: CodeableConcept
	/** A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future. */
	use: string

	_use?: Element
	/** The party to whom the professional services and/or products have been supplied or are being considered and for whom actual for facast reimbursement is sought. */
	patient: Reference
	/** The date this resource was created. */
	created: string

	_created?: Element
	/** The party responsible for authorization, adjudication and reimbursement. */
	insurer: Reference
	/** The provider which is responsible for the claim, predetermination or preauthorization. */
	requestor?: Reference
	/** Original request resource reference. */
	request?: Reference
	/** The outcome of the claim, predetermination, or preauthorization processing. */
	outcome: string

	_outcome?: Element
	/** A human readable description of the status of the adjudication. */
	disposition?: string

	_disposition?: Element
	/** Reference from the Insurer which is used in later communications which refers to this adjudication. */
	preAuthRef?: string

	_preAuthRef?: Element
	/** The time frame during which this authorization is effective. */
	preAuthPeriod?: Period
	/** Type of Party to be reimbursed: subscriber, provider, other. */
	payeeType?: CodeableConcept

	item?: ClaimResponseItem[]

	addItem?: ClaimResponseAddItem[]

	adjudication?: ClaimResponseAdjudication[]

	total?: ClaimResponseTotal[]

	payment?: ClaimResponsePayment
	/** A code, used only on a response to a preauthorization, to indicate whether the benefits payable have been reserved and for whom. */
	fundsReserve?: CodeableConcept
	/** A code for the form to be used for printing the content. */
	formCode?: CodeableConcept
	/** The actual form, by reference or inclusion, for printing the content or an EOB. */
	form?: Attachment

	processNote?: ClaimResponseProcessNote[]
	/** Request for additional supporting or authorizing information. */
	communicationRequest?: Reference[]

	insurance?: ClaimResponseInsurance[]

	error?: ClaimResponseError[]
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponseItem {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A number to uniquely reference the claim item entries. */
	itemSequence: number

	_itemSequence?: Element
	/** The numbers associated with notes below which apply to the adjudication of this item. */
	noteNumber?: number[]

	_noteNumber?: Element[]

	adjudication: ClaimResponseAdjudication[]

	detail?: ClaimResponseDetail[]
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponseAdjudication {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	category: CodeableConcept

	reason?: CodeableConcept

	amount?: Money

	value?: number

	_value?: Element
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponseDetail {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	detailSequence?: number

	_detailSequence?: Element

	noteNumber?: number[]

	_noteNumber?: Element[]

	adjudication: ClaimResponseAdjudication[]

	subDetail?: ClaimResponseSubDetail[]
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponseSubDetail {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	subDetailSequence?: number

	_subDetailSequence?: Element

	noteNumber?: number[]

	_noteNumber?: Element[]

	adjudication?: ClaimResponseAdjudication[]
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponseAddItem {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Claim items which this service line is intended to replace. */
	itemSequence?: number[]

	_itemSequence?: Element[]
	/** The sequence number of the details within the claim item which this line is intended to replace. */
	detailSequence?: number[]

	_detailSequence?: Element[]
	/** The sequence number of the sub-details within the details within the claim item which this line is intended to replace. */
	subdetailSequence?: number[]

	_subdetailSequence?: Element[]
	/** The providers who are authorized for the services rendered to the patient. */
	provider?: Reference[]
	/** When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item. */
	productOrService: CodeableConcept
	/** Item typification or modifiers codes to convey additional context for the product or service. */
	modifier?: CodeableConcept[]
	/** Identifies the program under which this may be recovered. */
	programCode?: CodeableConcept[]

	servicedDate?: string

	_servicedDate?: Element

	servicedPeriod?: Period

	locationCodeableConcept?: CodeableConcept

	locationAddress?: Address

	locationReference?: Reference
	/** The number of repetitions of a service or product. */
	quantity?: Quantity
	/** If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group. */
	unitPrice?: Money
	/** A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount. */
	factor?: number

	_factor?: Element
	/** The quantity times the unit price for an additional service or product or charge. */
	net?: Money
	/** Physical service site on the patient (limb, tooth, etc.). */
	bodySite?: CodeableConcept
	/** A region or surface of the bodySite, e.g. limb region or tooth surface(s). */
	subSite?: CodeableConcept[]
	/** The numbers associated with notes below which apply to the adjudication of this item. */
	noteNumber?: number[]

	_noteNumber?: Element[]

	adjudication: ClaimResponseAdjudication[]

	detail?: ClaimResponseDetail1[]
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponseDetail1 {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	productOrService: CodeableConcept

	modifier?: CodeableConcept[]

	quantity?: Quantity

	unitPrice?: Money

	factor?: number

	_factor?: Element

	net?: Money

	noteNumber?: number[]

	_noteNumber?: Element[]

	adjudication: ClaimResponseAdjudication[]

	subDetail?: ClaimResponseSubDetail1[]
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponseSubDetail1 {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	productOrService: CodeableConcept

	modifier?: CodeableConcept[]

	quantity?: Quantity

	unitPrice?: Money

	factor?: number

	_factor?: Element

	net?: Money

	noteNumber?: number[]

	_noteNumber?: Element[]

	adjudication: ClaimResponseAdjudication[]
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponseTotal {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A code to indicate the information type of this adjudication record. Information types may include: the value submitted, maximum values or percentages allowed or payable under the plan, amounts that the patient is responsible for in aggregate or pertaining to this item, amounts paid by other coverages, and the benefit payable for this item. */
	category: CodeableConcept
	/** Monetary total amount associated with the category. */
	amount: Money
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponsePayment {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Whether this represents partial or complete payment of the benefits payable. */
	type: CodeableConcept
	/** Total amount of all adjustments to this payment included in this transaction which are not related to this claim's adjudication. */
	adjustment?: Money
	/** Reason for the payment adjustment. */
	adjustmentReason?: CodeableConcept
	/** Estimated date the payment will be issued or the actual issue date of payment. */
	date?: string

	_date?: Element
	/** Benefits payable less any payment adjustment. */
	amount: Money
	/** Issuer's unique identifier for the payment instrument. */
	identifier?: Identifier
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponseProcessNote {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A number to uniquely identify a note entry. */
	number?: number

	_number?: Element
	/** The business purpose of the note text. */
	type?: 'display' | 'print' | 'printoper'

	_type?: Element
	/** The explanation or description associated with the processing. */
	text: string

	_text?: Element
	/** A code to define the language used in the text of the note. */
	language?: CodeableConcept
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponseInsurance {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A number to uniquely identify insurance entries and provide a sequence of coverages to convey coordination of benefit order. */
	sequence: number

	_sequence?: Element
	/** A flag to indicate that this Coverage is to be used for adjudication of this claim when set to true. */
	focal: boolean

	_focal?: Element
	/** Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system. */
	coverage: Reference
	/** A business agreement number established between the provider and the insurer for special business processing purposes. */
	businessArrangement?: string

	_businessArrangement?: Element
	/** The result of the adjudication of the line items for the Coverage specified in this insurance. */
	claimResponse?: Reference
}

/** This resource provides the adjudication details from the processing of a Claim resource. */

export interface ClaimResponseError {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** The sequence number of the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure. */
	itemSequence?: number

	_itemSequence?: Element
	/** The sequence number of the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure. */
	detailSequence?: number

	_detailSequence?: Element
	/** The sequence number of the sub-detail within the detail within the line item submitted which contains the error. This value is omitted when the error occurs outside of the item structure. */
	subDetailSequence?: number

	_subDetailSequence?: Element
	/** An error code, from a specified code system, which details why the claim could not be adjudicated. */
	code: CodeableConcept
}
