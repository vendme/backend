const knex = require('../database/dbConfig');
const admin = require('../firebase-admin/admin');
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../api/server');
const rp = require('request-promise');
const fixtures = require('./fixtures');
