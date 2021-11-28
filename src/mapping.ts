import {
  RecordCall,
  RevokeCall
} from "../generated/ContractCompendium/ContractCompendium"
import { Record, Revoke } from "../generated/schema"

export function handleRecord(call: RecordCall): void {
  let entity = new Record(call.transaction.hash.toHexString());
  entity.topic = call.inputs.topic; 
  entity.content = call.inputs.content;
  entity.save();
}

export function handleRevoke(call: RevokeCall): void {
  let entity = new Revoke(call.transaction.hash.toHexString());
  entity.topic = call.inputs.topic;
  entity.save();
}
