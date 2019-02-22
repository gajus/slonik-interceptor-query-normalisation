# slonik-interceptor-query-normalisation

[![Travis build status](http://img.shields.io/travis/gajus/slonik-interceptor-query-normalisation/master.svg?style=flat-square)](https://travis-ci.org/gajus/slonik-interceptor-query-normalisation)
[![Coveralls](https://img.shields.io/coveralls/gajus/slonik-interceptor-query-normalisation.svg?style=flat-square)](https://coveralls.io/github/gajus/slonik-interceptor-query-normalisation)
[![NPM version](http://img.shields.io/npm/v/slonik-interceptor-query-normalisation.svg?style=flat-square)](https://www.npmjs.org/package/slonik-interceptor-query-normalisation)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

Normalises [Slonik](https://github.com/gajus/slonik) query.

## API

```js
import {
  createQueryNormalisationInterceptor
} from 'slonik';

```

```js
/**
 * @property stripComments Strips comments from the query (default: true).
 */
type ConfigurationType = {|
  +stripComments?: boolean
|};

(configuration?: ConfigurationType) => InterceptorType;

```

## Example usage

```js
import {
  createPool
} from 'slonik';
import {
  createQueryNormalisationInterceptor
} from 'slonik-interceptor-query-normalisation';

const interceptors = [
  createQueryNormalisationInterceptor({
    stripComments: true
  })
];

const connection = createPool('postgres://', {
  interceptors
});

connection.any(sql`
  -- Foo bar.
  SELECT
    id,
    full_name
  FROM person
`);

```

Evalutes query:

```sql
SELECT id, full_name FROM person

```
