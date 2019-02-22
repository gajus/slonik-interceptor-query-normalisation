// @flow

import test from 'ava';
import createQueryContext from '../../helpers/createQueryContext';
import createQueryNormalisationInterceptor from '../../../src/factories/createQueryNormalisationInterceptor';

test('strips comments from the query', async (t) => {
  const interceptor = createQueryNormalisationInterceptor({
    stripComments: true
  });

  const transformQuery = interceptor.transformQuery;

  if (!transformQuery) {
    throw new Error('Unexpected state.');
  }

  const query = await transformQuery(createQueryContext(), {
    sql: 'SELECT 1; --',
    values: []
  });

  t.deepEqual(query, {
    sql: 'SELECT 1;',
    values: []
  });
});
