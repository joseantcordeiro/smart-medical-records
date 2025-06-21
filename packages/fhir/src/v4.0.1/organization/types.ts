import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  ContactPoint,
  Address,
  Reference,
  HumanName,
  Period,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/* Generated from FHIR JSON Schema */

/** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */

export interface Organization<Contained = ResourceList> {
  resourceType: `Organization`;
  /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
  id?: string;
  /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  meta?: Meta;
  /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
  implicitRules?: string;

  _implicitRules?: Element;
  /** The base language in which the resource is written. */
  language?: string;

  _language?: Element;
  /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
  text?: Narrative;
  contained?: Contained[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Identifier for the organization that is used to identify the organization across multiple disparate systems. */
  identifier?: Identifier[];
  /** Whether the organization's record is still in active use. */
  active?: boolean;

  _active?: Element;
  /** The kind(s) of organization that this is. */
  type?: CodeableConcept[];
  /** A name associated with the organization. */
  name?: string;

  _name?: Element;
  /** A list of alternate names that the organization is known as, or was known as in the past. */
  alias?: string[];

  _alias?: Element[];
  /** A contact detail for the organization. */
  telecom?: ContactPoint[];
  /** An address for the organization. */
  address?: Address[];
  /** The organization of which this organization forms a part. */
  partOf?: Reference;

  contact?: OrganizationContact[];
  /** Technical endpoints providing access to services operated for the organization. */
  endpoint?: Reference[];
}

/** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */

export interface OrganizationContact {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Indicates a purpose for which the contact can be reached. */
  purpose?: CodeableConcept;
  /** A name associated with the contact. */
  name?: HumanName;
  /** A contact detail (e.g. a telephone number or an email address) by which the party may be contacted. */
  telecom?: ContactPoint[];
  /** Visiting or postal addresses for the contact. */
  address?: Address;
}

/** Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship. */

export interface OrganizationAffiliation<Contained = ResourceList> {
  resourceType: `OrganizationAffiliation`;
  /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
  id?: string;
  /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  meta?: Meta;
  /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
  implicitRules?: string;

  _implicitRules?: Element;
  /** The base language in which the resource is written. */
  language?: string;

  _language?: Element;
  /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
  text?: Narrative;
  contained?: Contained[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Business identifiers that are specific to this role. */
  identifier?: Identifier[];
  /** Whether this organization affiliation record is in active use. */
  active?: boolean;

  _active?: Element;
  /** The period during which the participatingOrganization is affiliated with the primary organization. */
  period?: Period;
  /** Organization where the role is available (primary organization/has members). */
  organization?: Reference;
  /** The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of). */
  participatingOrganization?: Reference;
  /** Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined). */
  network?: Reference[];
  /** Definition of the role the participatingOrganization plays in the association. */
  code?: CodeableConcept[];
  /** Specific specialty of the participatingOrganization in the context of the role. */
  specialty?: CodeableConcept[];
  /** The location(s) at which the role occurs. */
  location?: Reference[];
  /** Healthcare services provided through the role. */
  healthcareService?: Reference[];
  /** Contact details at the participatingOrganization relevant to this Affiliation. */
  telecom?: ContactPoint[];
  /** Technical endpoints providing access to services operated for this role. */
  endpoint?: Reference[];
}
