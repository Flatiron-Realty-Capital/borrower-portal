import { validateEmail } from "../validateEmail";

export const VALIDATOR_REQUIRE = (value) => (value ? undefined : "Required");

export const VALIDATOR_REQUIRE_NUM = (value) =>
  isNaN(value) ? "Must be a number" : undefined;

export const VALIDATOR_MIN_CHAR = (min) => (value) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;

export const VALIDATOR_EMAIL = (value) =>
  validateEmail(value) === null ? "Valid email required" : undefined;
