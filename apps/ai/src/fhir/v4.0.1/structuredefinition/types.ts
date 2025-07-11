import type {
	CodeableConcept,
	Coding,
	ContactDetail,
	Element,
	Extension,
	Identifier,
	Meta,
	UsageContext,
} from '../core/types'
import type { ElementDefinition } from '../elementdefinition/types'
import type { Narrative } from '../narrative/types'
import type { ResourceList } from '../resourcelist/types'

/* Generated from FHIR JSON Schema */

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */

export interface StructureDefinition<Contained = ResourceList> {
	resourceType: `StructureDefinition`
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
	/** An absolute URI that is used to identify this structure definition when it is referenced in a specification, model, design or an instance; also called its canonical identifier. This SHOULD be globally unique and SHOULD be a literal address at which at which an authoritative instance of this structure definition is (or will be) published. This URL can be the target of a canonical reference. It SHALL remain the same when the structure definition is stored on different servers. */
	url: string

	_url?: Element
	/** A formal identifier that is used to identify this structure definition when it is represented in other formats, or referenced in a specification, model, design or an instance. */
	identifier?: Identifier[]
	/** The identifier that is used to identify this version of the structure definition when it is referenced in a specification, model, design or instance. This is an arbitrary value managed by the structure definition author and is not expected to be globally unique. For example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available. There is also no expectation that versions can be placed in a lexicographical sequence. */
	version?: string

	_version?: Element
	/** A natural language name identifying the structure definition. This name should be usable as an identifier for the module by machine processing applications such as code generation. */
	name: string

	_name?: Element
	/** A short, descriptive, user-friendly title for the structure definition. */
	title?: string

	_title?: Element
	/** The status of this structure definition. Enables tracking the life-cycle of the content. */
	status: 'draft' | 'active' | 'retired' | 'unknown'

	_status?: Element
	/** A Boolean value to indicate that this structure definition is authored for testing purposes (or education/evaluation/marketing) and is not intended to be used for genuine usage. */
	experimental?: boolean

	_experimental?: Element
	/** The date  (and optionally time) when the structure definition was published. The date must change when the business version changes and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes. */
	date?: string

	_date?: Element
	/** The name of the organization or individual that published the structure definition. */
	publisher?: string

	_publisher?: Element
	/** Contact details to assist a user in finding and communicating with the publisher. */
	contact?: ContactDetail[]
	/** A free text natural language description of the structure definition from a consumer's perspective. */
	description?: string

	_description?: Element
	/** The content was developed with a focus and intent of supporting the contexts that are listed. These contexts may be general categories (gender, age, ...) or may be references to specific programs (insurance plans, studies, ...) and may be used to assist with indexing and searching for appropriate structure definition instances. */
	useContext?: UsageContext[]
	/** A legal or geographic region in which the structure definition is intended to be used. */
	jurisdiction?: CodeableConcept[]
	/** Explanation of why this structure definition is needed and why it has been designed as it has. */
	purpose?: string

	_purpose?: Element
	/** A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the structure definition. */
	copyright?: string

	_copyright?: Element
	/** A set of key words or terms from external terminologies that may be used to assist with indexing and searching of templates nby describing the use of this structure definition, or the content it describes. */
	keyword?: Coding[]
	/** The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 4.0.1. for this version. */
	fhirVersion?:
		| '0.01'
		| '0.05'
		| '0.06'
		| '0.11'
		| '0.0.80'
		| '0.0.81'
		| '0.0.82'
		| '0.4.0'
		| '0.5.0'
		| '1.0.0'
		| '1.0.1'
		| '1.0.2'
		| '1.1.0'
		| '1.4.0'
		| '1.6.0'
		| '1.8.0'
		| '3.0.0'
		| '3.0.1'
		| '3.3.0'
		| '3.5.0'
		| '4.0.0'
		| '4.0.1'

	_fhirVersion?: Element

	mapping?: StructureDefinitionMapping[]
	/** Defines the kind of structure that this definition is describing. */
	kind: 'primitive-type' | 'complex-type' | 'resource' | 'logical'

	_kind?: Element
	/** Whether structure this definition describes is abstract or not  - that is, whether the structure is not intended to be instantiated. For Resources and Data types, abstract types will never be exchanged  between systems. */
	abstract: boolean

	_abstract?: Element

	context?: StructureDefinitionContext[]
	/** A set of rules as FHIRPath Invariants about when the extension can be used (e.g. co-occurrence variants for the extension). All the rules must be true. */
	contextInvariant?: string[]

	_contextInvariant?: Element[]
	/** The type this structure describes. If the derivation kind is 'specialization' then this is the master definition for a type, and there is always one of these (a data type, an extension, a resource, including abstract ones). Otherwise the structure definition is a constraint on the stated type (and in this case, the type cannot be an abstract type).  References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models. */
	type: string

	_type?: Element
	/** An absolute URI that is the base structure from which this type is derived, either by specialization or constraint. */
	baseDefinition?: string
	/** How the type relates to the baseDefinition. */
	derivation?: 'specialization' | 'constraint'

	_derivation?: Element

	snapshot?: StructureDefinitionSnapshot

	differential?: StructureDefinitionDifferential
}

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */

export interface StructureDefinitionMapping {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** An Internal id that is used to identify this mapping set when specific mappings are made. */
	identity: string

	_identity?: Element
	/** An absolute URI that identifies the specification that this mapping is expressed to. */
	uri?: string

	_uri?: Element
	/** A name for the specification that is being mapped to. */
	name?: string

	_name?: Element
	/** Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage. */
	comment?: string

	_comment?: Element
}

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */

export interface StructureDefinitionContext {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Defines how to interpret the expression that defines what the context of the extension is. */
	type: 'fhirpath' | 'element' | 'extension'

	_type?: Element
	/** An expression that defines where an extension can be used in resources. */
	expression: string

	_expression?: Element
}

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */

export interface StructureDefinitionSnapshot {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Captures constraints on each element within the resource. */
	element: ElementDefinition[]
}

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */

export interface StructureDefinitionDifferential {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** Captures constraints on each element within the resource. */
	element: ElementDefinition[]
}
