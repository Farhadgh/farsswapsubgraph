import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { PairCreated } from "../generated/FarsFactory/FarsFactory"

export function createPairCreatedEvent(
  token0: Address,
  token1: Address,
  stable: boolean,
  pair: Address,
  allPairsLength: BigInt
): PairCreated {
  let pairCreatedEvent = changetype<PairCreated>(newMockEvent())

  pairCreatedEvent.parameters = new Array()

  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token0", ethereum.Value.fromAddress(token0))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("token1", ethereum.Value.fromAddress(token1))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("stable", ethereum.Value.fromBoolean(stable))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam("pair", ethereum.Value.fromAddress(pair))
  )
  pairCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "allPairsLength",
      ethereum.Value.fromUnsignedBigInt(allPairsLength)
    )
  )

  return pairCreatedEvent
}
