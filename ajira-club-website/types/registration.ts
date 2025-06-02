export type MembershipType = "student" | "alumni" | "mentor"

export interface RegistrationFormData {
  name: string
  email: string
  phone: string
  schoolId: string
  membershipType: MembershipType
  profilePicture?: File
}

export interface VerificationStatus {
  personalInfo: boolean
  payment: boolean
  emailVerification: boolean
}

