import vine from '@vinejs/vine'

export const signUpValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(3).maxLength(255),
    email: vine.string().email().trim().normalizeEmail(),
    password: vine.string().minLength(8).trim(),
  })
)

export const signInValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim().normalizeEmail(),
    password: vine.string().minLength(8).trim(),
  })
)

export const forgotPasswordValidator = vine.compile(
  vine.object({
    email: vine.string().email().trim().normalizeEmail(),
  })
)

export const resetPasswordValidator = vine.compile(
  vine.object({
    newPassword: vine
      .string()
      .minLength(8)
      .trim()
      .confirmed({ confirmationField: 'confirmPassword' }),
  })
)
