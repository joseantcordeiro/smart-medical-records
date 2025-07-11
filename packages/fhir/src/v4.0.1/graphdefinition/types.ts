import type {
	CodeableConcept,
	ContactDetail,
	Element,
	Extension,
	Meta,
	UsageContext,
} from '../core/types'
import type { Narrative } from '../narrative/types'
import type { ResourceList } from '../resourcelist/types'

/* Generated from FHIR JSON Schema */

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */

export interface GraphDefinition<Contained = ResourceList> {
	resourceType: `GraphDefinition`
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
	/** An absolute URI that is used to identify this graph definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this graph definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the graph definition is stored on different servers. */
	url?: string

	_url?: Element
	/** The identifier that is used to identify this version of the graph definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the graph definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
	version?: string

	_version?: Element
	/** A natural language name identifying the graph definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name: string

	_name?: Element
	/** The status of this graph definition. Enables tracking the life-cycle of the content. */
	status: 'draft' | 'active' | 'retired' | 'unknown'

	_status?: Element
	/** A Boolean value to indicate that this graph definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean

	_experimental?: Element
	/** The date  (and optionally time) when the graph definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the graph definition changes. */
	date?: string

	_date?: Element
	/** The name of the organization or individual that published the graph definition. */
	publisher?: string

	_publisher?: Element
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: ContactDetail[]
	/** A free text natural language description of the graph definition from a consumer's perspective. */
	description?: string

	_description?: Element
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate graph definition instances. */
	useContext?: UsageContext[]
	/** A legal or geographic region in which the graph definition is intended to be used. */
	jurisdiction?: CodeableConcept[]
	/** Explanation of why this graph definition is needed and why it has been designed as it has. */
	purpose?: string

	_purpose?: Element
	/** The type of FHIR resource at which instances of this graph start. */
	start: string

	_start?: Element
	/** The profile that describes the use of the base resource. */
	profile?: string

	link?: GraphDefinitionLink[]
}

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */

export interface GraphDefinitionLink {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** A FHIR expression that identifies one of FHIR References to other resources. */
	path?: string

	_path?: Element
	/** Which slice (if profiled). */
	sliceName?: string

	_sliceName?: Element
	/** Minimum occurrences for this link. */
	min?: number

	_min?: Element
	/** Maximum occurrences for this link. */
	max?: string

	_max?: Element
	/** Information about why this link is of interest in this graph definition. */
	description?: string

	_description?: Element

	target?: GraphDefinitionTarget[]
}

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */

export interface GraphDefinitionTarget {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	type?: string

	_type?: Element

	params?: string

	_params?: Element

	profile?: string

	compartment?: GraphDefinitionCompartment[]

	link?: GraphDefinitionLink[]
}

/** A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set. */

export interface GraphDefinitionCompartment {
	id?: string

	extension?: Extension[]

	modifierExtension?: Extension[]

	use?: 'condition' | 'requirement'

	_use?: Element

	code?: string

	_code?: Element

	rule?: 'identical' | 'matching' | 'different' | 'custom'

	_rule?: Element

	expression?: string

	_expression?: Element

	description?: string

	_description?: Element
}
