# Rekt dogs subgraph

This subgraph provide an standard erc-721 implementation deployed into Polygon.

**Link to the hosted service subgraph :**
https://thegraph.com/hosted-service/subgraph/rtomas/rekt-dogs

---

**Contract from the collection :**
https://polygonscan.com/address/0xace8187b113a38f83bd9c896c6878b175c234dcc

**Link to opensea colection :**
https://opensea.io/collection/rektdogs

---

generate code:
`graph codegen`

Subgraph failed with non-deterministic error: failed to process trigger: block #39554635 (0x6dd0…6383), transaction 8bcb2a2644f9808717b77e8208e83b6011b28526ba7c294fde4e5e3e9657a17d: Entity Token[0]: missing value for non-nullable field `mintTime` wasm backtrace: 0: 0x30d5 - <unknown>!generated/schema/Token#save 1: 0x3804 - <unknown>!src/mappings/transfer/transfer.handleMint 2: 0x4735 - <unknown>!src/mappings/index/handleTransfer , retry_delay_s: 117, attempt: 0
