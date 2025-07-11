import type {
	CodeableConcept,
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

/** Catalog entries are wrappers that contextualize items included in a catalog. */

export interface CatalogEntry<Contained = ResourceList> {
	resourceType: `CatalogEntry`
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
	/** Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code. */
	identifier?: Identifier[]
	/** The type of item - medication, device, service, protocol or other. */
	type?: CodeableConcept
	/** Whether the entry represents an orderable item. */
	orderable: boolean

	_orderable?: Element
	/** The item in a catalog or definition. */
	referencedItem: Reference
	/** Used in supporting related concepts, e.g. NDC to RxNorm. */
	additionalIdentifier?: Identifier[]
	/** Classes of devices, or ATC for medication. */
	classification?: CodeableConcept[]
	/** Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable. */
	status?: 'draft' | 'active' | 'retired' | 'unknown'

	_status?: Element
	/** The time period in which this catalog entry is expected to be active. */
	validityPeriod?: Period
	/** The date until which this catalog entry is expected to be active. */
	validTo?: string

	_validTo?: Element
	/** Typically date of issue is different from the beginning of the validity. This can be used to see when an item was last updated. */
	lastUpdated?: string

	_lastUpdated?: Element
	/** Used for examplefor Out of Formulary, or any specifics. */
	additionalCharacteristic?: CodeableConcept[]
	/** User for example for ATC classification, or. */
	additionalClassification?: CodeableConcept[]

	relatedEntry?: CatalogEntryRelatedEntry[]
}

/** Catalog entries are wrappers that contextualize items included in a catalog. */

export interface CatalogEntryRelatedEntry {
	/** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
	id?: string
	/** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
	extension?: Extension[]
	/** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
	modifierExtension?: Extension[]
	/** The type of relation to the related item: child, parent, packageContent, containerPackage, usedIn, uses, requires, etc. */
	relationtype: 'triggers' | 'is-replaced-by'

	_relationtype?: Element
	/** The reference to the related item. */
	item: Reference
}
