
import crypto from 'crypto';
import mime from 'mime-types';
import fs from 'fs';
import path from 'path';

/**
 * Base64 decode string
 * @param {String} str 
 */
const base64Decode = (str) => new Buffer(str, 'base64').toString('utf8');

/**
 * Base64 encode string
 * @param {String} str 
 */
const base64Encode = (str) => new Buffer(str).toString('base64');

/**
 * Encode URL
 * @param {String} str 
 */
const urlEncode = (str) => encodeURIComponent(str);

/**
 * Decode URL
 * @param {String} str 
 */
const urlDecode = (str) => decodeURIComponent(str);

/**
 * Hash string based on algorithm
 * @param {String} str 
 * @param {String} algorithm 
 */
const hash = (str, algorithm = 'md5') => crypto.createHash(algorithm).update(str).digest("hex");

/**
 * Check if provided string is an email or not
 * @param {String} str 
 */
const validateEmail = (str) => {
  const emailReg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return emailReg.test(str);
}

/**
 * Detect string type
 * String can ba path to file as well
 * @param {String} str 
 */
const detectType = (str) => {
  const extension = path.extname(str) || str;
  return mime.lookup(extension);
}

/**
 * Check if a string is numeric or not
 * @param {String} str 
 */
const isNumeric = (str) => !isNaN(parseFloat(str)) && isFinite(str);

/**
 * Check if input is set or not (has a value even if empty)
 * @param {String} str 
 */
const isSet = (str) => (typeof str !== "undefined");

export {
  base64Decode,
  base64Encode,
  validateEmail,
  detectType,
  urlDecode,
  urlEncode,
  isNumeric,
  isSet,
  hash
};