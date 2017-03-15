import { expect } from 'chai';
import {
    isValidPassword,
    passwordsMatch,
    isValidUsername,
    isValidEmail
} from './formValidation';

describe('src/shared/utils/formValidation', () => {
    describe('Password validation', () => {
        describe('Given a password between 6 and 25 digits, when validating password', () => {
            it('should return false', () => {
                expect(isValidPassword('password')).to.equal(true);
            });
        });

        describe('Given an empty string', () => {
            it('should return false', () => {
                expect(isValidPassword('')).to.equal(false);
            });
        });

        describe('Given a password less than 6 digits', () => {
            it('should return false', () => {
                expect(isValidPassword('aaaaa')).to.equal(false);
            });
        });

        describe('Given a password greater than 25 digits', () => {
            it('should return false', () => {
                expect(isValidPassword('aaaaaaaaaaaaaaaaaaaaaaaaaa')).to.equal(false);
            });
        });

        describe('Given an string containing invalid characters', () => {
            it('should return false', () => {
                expect(isValidPassword('*&^%$#@!)(+":;')).to.equal(false);
            });
        });
    });

    describe('Password match', () => {
        describe('Given a password and a confirm password that are the same', () => {
            it('should return true', () => {
                expect(passwordsMatch('password', 'password')).to.equal(true);
            });
        });

        describe('Given a password and a confirm password that are not the same', () => {
            it('should return false', () => {
                expect(passwordsMatch('password', 'differentPassword')).to.equal(false);
            });
        });
    });

    describe('Username validation', () => {
        describe('Given a password between 3 and 20 digits', () => {
            it('should return true', () => {
                expect(isValidUsername('walkerrandolphsmith')).to.equal(true);
            });
        });

        describe('Given an empty string', () => {
            it('should return false', () => {
                expect(isValidUsername('')).to.equal(false);
            });
        });

        describe('Given a password less than 3 digits', () => {
            it('should return false', () => {
                expect(isValidUsername('ws')).to.equal(false);
            });
        });

        describe('Given a password greater than 20 digits', () => {
            it('should return false', () => {
                expect(isValidUsername('aaaaaaaaaaaaaaaaaaaaa')).to.equal(false);
            });
        });

        describe('Given a password with invalid characters', () => {
            it('should return false', () => {
                expect(isValidUsername('!@#$%^&*()_+";:,.<>/?')).to.equal(false);
            });
        });
    });

    describe('Email validation', () => {
        describe('Given a email between 3 and 20 digits', () => {
            it('should return true', () => {
                expect(isValidEmail('walkerrandolphsmith@gmail.com')).to.equal(true);
            });
        });

        describe('Given a email not containing an @ symbol', () => {
            it('should return false', () => {
                expect(isValidEmail('walkerrandolphsmithgmail.com')).to.equal(false);
            });
        });

        describe('Given a email not containing at least one . symbol after an @ symbol', () => {
            it('should return false', () => {
                expect(isValidEmail('walkerrandolphsmithgmail.@com')).to.equal(false);
            });
        });

        describe('Given a email containing characters other than a-z, 0-9, -, _,.  before @ symbol', () => {
            it('should return false', () => {
                expect(isValidEmail('&.@gmail.com')).to.equal(false);
            });
        });

        describe('Given a email not containing any characters between @ and .', () => {
            it('should return false', () => {
                expect(isValidEmail('walkerrandolphsmith@.com')).to.equal(false);
            });
        });
    });
});