import type {
	Age,
	CodeableConcept,
	ContactDetail,
	DataRequirement,
	Duration,
	Element,
	Expression,
	Extension,
	Identifier,
	Meta,
	Period,
	Quantity,
	Range,
	Reference,
	RelatedArtifact,
	Timing,
	TriggerDefinition,
	UsageContext,
} from '../core/types'
import type { Narrative } from '../narrative/types'
import type { ResourceList } from '../resourcelist/types'

/* Generated from FHIR JSON Schema */

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */

export interface PlanDefinition<Contained = ResourceList> {
	resourceType: `PlanDefinition`
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
	/** An absolute URI that is used to identify this plan definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this plan definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the plan definition is stored on different servers. */
	url?: string

	_url?: Element
	/** A formal identifier that is used to identify this plan definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Identifier[]
	/** The identifier that is used to identify this version of the plan definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the plan definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. To provide a version consistent with the Decision Support Service specification, use the format Major.Minor.Revision (e.g. 1.0.0). For more information on versioning knowledge assets, refer to the Decision Support Service specification. Note that a version is required for non-experimental active artifacts. */
	version?: string

	_version?: Element
	/** A natural language name identifying the plan definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name?: string

	_name?: Element
	/** A short, descriptive, user-friendly title for the plan definition. */
	title?: string

	_title?: Element
	/** An explanatory or alternate title for the plan definition giving additional information about its content. */
	subtitle?: string

	_subtitle?: Element
	/** A high-level category for the plan definition that distinguishes the kinds of systems that would be interested in the plan definition. */
	type?: CodeableConcept
	/** The status of this plan definition. Enables tracking the life-cycle of the content. */
	status: 'draft' | 'active' | 'retired' | 'unknown'

	_status?: Element
	/** A Boolean value to indicate that this plan definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean

	_experimental?: Element

	subjectCodeableConcept?: CodeableConcept

	subjectReference?: Reference
	/** The date  (and optionally time) when the plan definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the plan definition changes. */
	date?: string

	_date?: Element
	/** The name of the organization or individual that published the plan definition. */
	publisher?: string

	_publisher?: Element
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: ContactDetail[]
	/** A free text natural language description of the plan definition from a consumer's perspective. */
	description?: string

	_description?: Element
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate plan definition instances. */
	useContext?: UsageContext[]
	/** A legal or geographic region in which the plan definition is intended to be used. */
	jurisdiction?: CodeableConcept[]
	/** Explanation of why this plan definition is needed and why it has been designed as it has. */
	purpose?: string

	_purpose?: Element
	/** A detailed description of how the plan definition is used from a clinical perspective. */
	usage?: string

	_usage?: Element
	/** A copyright statement relating to the plan definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the plan definition. */
	copyright?: string

	_copyright?: Element
	/** The date on which the resource content was approved by the publisher. Approval happens once when the content is officially approved for usage. */
	approvalDate?: string

	_approvalDate?: Element
	/** The date on which the resource content was last reviewed. Review happens periodically after approval but does not change the original approval date. */
	lastReviewDate?: string

	_lastReviewDate?: Element
	/** The period during which the plan definition content was or is planned to be in active use. */
	effectivePeriod?: Period
	/** Descriptive topics related to the content of the plan definition. Topics provide a high-level categorization of the definition that can be useful for filtering and searching. */
	topic?: CodeableConcept[]
	/** An individiual or organization primarily involved in the creation and maintenance of the content. */
	author?: ContactDetail[]
	/** An individual or organization primarily responsible for internal coherence of the content. */
	editor?: ContactDetail[]
	/** An individual or organization primarily responsible for review of some aspect of the content. */
	reviewer?: ContactDetail[]
	/** An individual or organization responsible for officially endorsing the content for use in some setting. */
	endorser?: ContactDetail[]
	/** Related artifacts such as additional documentation, justification, or bibliographic references. */
	relatedArtifact?: RelatedArtifact[]
	/** A reference to a Library resource containing any formal logic used by the plan definition. */
	library?: string[]

	goal?: PlanDefinitionGoal[]

	action?: PlanDefinitionAction[]
}

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */

export interface PlanDefinitionGoal {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Indicates a category the goal falls within. */
	category?: CodeableConcept
	/** Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding". */
	description: CodeableConcept
	/** Identifies the expected level of importance associated with reaching/sustaining the defined goal. */
	priority?: CodeableConcept
	/** The event after which the goal should begin being pursued. */
	start?: CodeableConcept
	/** Identifies problems, conditions, issues, or concerns the goal is intended to address. */
	addresses?: CodeableConcept[]
	/** Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources. */
	documentation?: RelatedArtifact[]

	target?: PlanDefinitionTarget[]
}

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */

export interface PlanDefinitionTarget {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	measure?: CodeableConcept

	detailQuantity?: Quantity

	detailRange?: Range

	detailCodeableConcept?: CodeableConcept

	due?: Duration
}

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */

export interface PlanDefinitionAction {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A user-visible prefix for the action. */
	prefix?: string

	_prefix?: Element
	/** The title of the action displayed to a user. */
	title?: string

	_title?: Element
	/** A brief description of the action used to provide a summary to display to the user. */
	description?: string

	_description?: Element
	/** A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically. */
	textEquivalent?: string

	_textEquivalent?: Element
	/** Indicates how quickly the action should be addressed with respect to other actions. */
	priority?: string

	_priority?: Element
	/** A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template. */
	code?: CodeableConcept[]
	/** A description of why this action is necessary or appropriate. */
	reason?: CodeableConcept[]
	/** Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources. */
	documentation?: RelatedArtifact[]
	/** Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition. */
	goalId?: string[]

	_goalId?: Element[]

	subjectCodeableConcept?: CodeableConcept

	subjectReference?: Reference
	/** A description of when the action should be triggered. */
	trigger?: TriggerDefinition[]

	condition?: PlanDefinitionCondition[]
	/** Defines input data requirements for the action. */
	input?: DataRequirement[]
	/** Defines the outputs of the action, if any. */
	output?: DataRequirement[]

	relatedAction?: PlanDefinitionRelatedAction[]

	timingDateTime?: string

	_timingDateTime?: Element

	timingAge?: Age

	timingPeriod?: Period

	timingDuration?: Duration

	timingRange?: Range

	timingTiming?: Timing

	participant?: PlanDefinitionParticipant[]
	/** The type of action to perform (create, update, remove). */
	type?: CodeableConcept
	/** Defines the grouping behavior for the action and its children. */
	groupingBehavior?: 'visual-group' | 'logical-group' | 'sentence-group'

	_groupingBehavior?: Element
	/** Defines the selection behavior for the action and its children. */
	selectionBehavior?: 'any' | 'all' | 'all-or-none' | 'exactly-one' | 'at-most-one' | 'one-or-more'

	_selectionBehavior?: Element
	/** Defines the required behavior for the action. */
	requiredBehavior?: 'must' | 'could' | 'must-unless-documented'

	_requiredBehavior?: Element
	/** Defines whether the action should usually be preselected. */
	precheckBehavior?: 'yes' | 'no'

	_precheckBehavior?: Element
	/** Defines whether the action can be selected multiple times. */
	cardinalityBehavior?: 'single' | 'multiple'

	_cardinalityBehavior?: Element

	definitionCanonical?: string

	_definitionCanonical?: Element

	definitionUri?: string

	_definitionUri?: Element
	/** A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input. */
	transform?: string

	dynamicValue?: PlanDefinitionDynamicValue[]

	action?: PlanDefinitionAction[]
}

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */

export interface PlanDefinitionCondition {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	kind?: 'applicability' | 'start' | 'stop'

	_kind?: Element

	expression?: Expression
}

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */

export interface PlanDefinitionRelatedAction {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	actionId?: string

	_actionId?: Element

	relationship?:
		| 'before-start'
		| 'before'
		| 'before-end'
		| 'concurrent-with-start'
		| 'concurrent'
		| 'concurrent-with-end'
		| 'after-start'
		| 'after'
		| 'after-end'

	_relationship?: Element

	offsetDuration?: Duration

	offsetRange?: Range
}

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */

export interface PlanDefinitionParticipant {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	type?: 'patient' | 'practitioner' | 'related-person' | 'device'

	_type?: Element

	role?: CodeableConcept
}

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */

export interface PlanDefinitionDynamicValue {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	path?: string

	_path?: Element

	expression?: Expression
}
