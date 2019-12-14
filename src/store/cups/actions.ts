import { action } from 'typesafe-actions'
import { } from './types'

export const enum CupActionTypes {
  CUP_HIT = 'CUP_HIT',
  REMOVE_CUP_HIT = 'REMOVE_CUP_HIT'

}

export const markCupHit = (payload: any) => action(CupActionTypes.CUP_HIT, payload)