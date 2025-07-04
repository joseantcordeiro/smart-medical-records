import type {
	Annotation,
	CodeableConcept,
	ContactDetail,
	Element,
	Extension,
	Identifier,
	Meta,
	Money,
	Period,
	Quantity,
	Reference,
	Timing,
	UsageContext,
} from '../core/types'
import type { Narrative } from '../narrative/types'
import type { ResourceList } from '../resourcelist/types'

/* Generated from FHIR JSON Schema */

/** The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation. */

export interface ChargeItem<Contained = ResourceList> {
	resourceType: `ChargeItem`
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
	/** Identifiers assigned to this event performer or other systems. */
	identifier?: Identifier[]
	/** References the (external) source of pricing information, rules of application for the code this ChargeItem uses. */
	definitionUri?: string[]

	_definitionUri?: Element[]
	/** References the source of pricing information, rules of application for the code this ChargeItem uses. */
	definitionCanonical?: string[]
	/** The current state of the ChargeItem. */
	status:
		| 'planned'
		| 'billable'
		| 'not-billable'
		| 'aborted'
		| 'billed'
		| 'entered-in-error'
		| 'unknown'

	_status?: Element
	/** ChargeItems can be grouped to larger ChargeItems covering the whole set. */
	partOf?: Reference[]
	/** A code that identifies the charge, like a billing code. */
	code: CodeableConcept
	/** The individual or set of individuals the action is being or was performed on. */
	subject: Reference
	/** The encounter or episode of care that establishes the context for this event. */
	context?: Reference

	occurrenceDateTime?: string

	_occurrenceDateTime?: Element

	occurrencePeriod?: Period

	occurrenceTiming?: Timing

	performer?: ChargeItemPerformer[]
	/** The organization requesting the service. */
	performingOrganization?: Reference
	/** The organization performing the service. */
	requestingOrganization?: Reference
	/** The financial cost center permits the tracking of charge attribution. */
	costCenter?: Reference
	/** Quantity of which the charge item has been serviced. */
	quantity?: Quantity
	/** The anatomical location where the related service has been applied. */
	bodysite?: CodeableConcept[]
	/** Factor overriding the factor determined by the rules associated with the code. */
	factorOverride?: number

	_factorOverride?: Element
	/** Total price of the charge overriding the list price associated with the code. */
	priceOverride?: Money
	/** If the list price or the rule-based factor associated with the code is overridden, this attribute can capture a text to indicate the  reason for this action. */
	overrideReason?: string

	_overrideReason?: Element
	/** The device, practitioner, etc. who entered the charge item. */
	enterer?: Reference
	/** Date the charge item was entered. */
	enteredDate?: string

	_enteredDate?: Element
	/** Describes why the event occurred in coded or textual form. */
	reason?: CodeableConcept[]
	/** Indicated the rendered service that caused this charge. */
	service?: Reference[]

	productReference?: Reference

	productCodeableConcept?: CodeableConcept
	/** Account into which this ChargeItems belongs. */
	account?: Reference[]
	/** Comments made about the event by the performer, subject or other participants. */
	note?: Annotation[]
	/** Further information supporting this charge. */
	supportingInformation?: Reference[]
}

/** The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation. */

export interface ChargeItemPerformer {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.). */
	function?: CodeableConcept
	/** The device, practitioner, etc. who performed or participated in the service. */
	actor: Reference
}

/** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */

export interface ChargeItemDefinition<Contained = ResourceList> {
	resourceType: `ChargeItemDefinition`
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
	/** An absolute URI that is used to identify this charge item definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this charge item definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the charge item definition is stored on different servers. */
	url: string

	_url?: Element
	/** A formal identifier that is used to identify this charge item definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Identifier[]
	/** The identifier that is used to identify this version of the charge item definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the charge item definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active assets. */
	version?: string

	_version?: Element
	/** A short, descriptive, user-friendly title for the charge item definition. */
	title?: string

	_title?: Element
	/** The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition. */
	derivedFromUri?: string[]

	_derivedFromUri?: Element[]
	/** A larger definition of which this particular definition is a component or step. */
	partOf?: string[]
	/** As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance. */
	replaces?: string[]
	/** The current state of the ChargeItemDefinition. */
	status: 'draft' | 'active' | 'retired' | 'unknown'

	_status?: Element
	/** A Boolean value to indicate that this charge item definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean

	_experimental?: Element
	/** The date  (and optionally time) when the charge item definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the charge item definition changes. */
	date?: string

	_date?: Element
	/** The name of the organization or individual that published the charge item definition. */
	publisher?: string

	_publisher?: Element
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: ContactDetail[]
	/** A free text natural language description of the charge item definition from a consumer's perspective. */
	description?: string

	_description?: Element
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate charge item definition instances. */
	useContext?: UsageContext[]
	/** A legal or geographic region in which the charge item definition is intended to be used. */
	jurisdiction?: CodeableConcept[]
	/** A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition. */
	copyright?: string

	_copyright?: Element
	/** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string

	_approvalDate?: Element
	/** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
	lastReviewDate?: string

	_lastReviewDate?: Element
	/** The period during which the charge item definition content was or is planned to be in active use. */
	effectivePeriod?: Period
	/** The defined billing details in this resource pertain to the given billing code. */
	code?: CodeableConcept
	/** The defined billing details in this resource pertain to the given product instance(s). */
	instance?: Reference[]

	applicability?: ChargeItemDefinitionApplicability[]

	propertyGroup?: ChargeItemDefinitionPropertyGroup[]
}

/** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */

export interface ChargeItemDefinitionApplicability {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A brief, natural language description of the condition that effectively communicates the intended semantics. */
	description?: string

	_description?: Element
	/** The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions. */
	language?: string

	_language?: Element
	/** An expression that returns true or false, indicating whether the condition is satisfied. When using FHIRPath expressions, the %context environment variable must be replaced at runtime with the ChargeItem resource to which this definition is applied. */
	expression?: string

	_expression?: Element
}

/** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */

export interface ChargeItemDefinitionPropertyGroup {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]

	applicability?: ChargeItemDefinitionApplicability[]

	priceComponent?: ChargeItemDefinitionPriceComponent[]
}

/** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */

export interface ChargeItemDefinitionPriceComponent {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	type?: string

	_type?: Element

	code?: CodeableConcept

	factor?: number

	_factor?: Element

	amount?: Money
}
