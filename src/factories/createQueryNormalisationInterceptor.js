// @flow

import type {
  InterceptorType
} from 'slonik';
import {
  stripComments
} from '../utilities';

/**
 * @property stripComments Strips comments from the query (default: true).
 */
type ConfigurationType = {|
  +stripComments?: boolean
|};

export default (configuration?: ConfigurationType): InterceptorType => {
  return {
    transformQuery: (context, query) => {
      let sql = query.sql;

      if (!configuration || configuration.stripComments !== false) {
        sql = stripComments(query.sql);
      }

      return {
        ...query,
        sql
      };
    }
  };
};
