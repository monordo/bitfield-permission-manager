import { Permission } from "./permission.tool";

const buildCondition = (fieldName: string, permission: string) => `("${fieldName}" & ${permission}) = ${permission}`

const addConditionToRow = (opt: {
  condition: string,
  op?: 'OR' | 'AND',
  parenthesis?: boolean,
}) => {
  const cond = opt.parenthesis ? `(${opt.condition})` : opt.condition;
  return opt.op ? ` ${opt.op} ${cond}` : cond;
}

/**
 * @param fieldName - The name of the field in the database
 * @param permissions - The permissions to check [[ OR, OR, OR ], AND [ OR, OR, OR ] AND [ OR, OR, OR]]
 * @returns - The SQL WHERE statement
 * @example
 * bitfieldSqlWhereBuilder("permissions", [
    [GroupAccountPermissions.ADMIN, GroupAccountPermissions.UPDATE_GROUP_INFO],
  ]);
 * // ("permissions" & 1) = 1 OR ("permissions" & 2) = 2
 * @example
 * bitfieldSqlWhereBuilder("permissions", [
   [GroupAccountPermissions.ADMIN, GroupAccountPermissions.UPDATE_GROUP_INFO],
   [GroupAccountPermissions.REMOVE_ACCOUNT, GroupAccountPermissions.DELETE_ADDRESS],
 ]);
 * // (("permissions" & 1) = 1 OR ("permissions" & 2) = 2) AND (("permissions" & 3) = 3 OR ("permissions" & 4) = 4)
**/
export const bitfieldSqlWhereBuilder = (
  fieldName: string,
  permissions: Permission[][],
): string | null => {
  let query: string = '';
  const mawWidth = permissions.reduce((acc, curr) => {
    return acc > curr.length ? acc : curr.length;
  }, 0);
  const maxHeigth = permissions.length;
  const useParenthesis = maxHeigth > 1 && mawWidth > 1;

  permissions.forEach((permissions, index) => {
    const condition = permissions.map((permission) => buildCondition(fieldName, permission.value.toString())).join(' OR ');
    query += addConditionToRow({ condition, op: index > 0 ? 'AND' : undefined, parenthesis: useParenthesis });
  });
  return query === '' ? null : query;
}

