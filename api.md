# DocumentSummaries

Types:

- <code><a href="./src/resources/document-summaries.ts">DocumentSummary</a></code>
- <code><a href="./src/resources/document-summaries.ts">DocumentSummaryEntryMode</a></code>
- <code><a href="./src/resources/document-summaries.ts">DocumentSummaryFormat</a></code>
- <code><a href="./src/resources/document-summaries.ts">DocumentSummaryListResponse</a></code>

Methods:

- <code title="get /document-summaries/{id}">client.documentSummaries.<a href="./src/resources/document-summaries.ts">retrieve</a>(id) -> DocumentSummary</code>
- <code title="put /document-summaries/{id}">client.documentSummaries.<a href="./src/resources/document-summaries.ts">update</a>(id, { ...params }) -> DocumentSummary</code>
- <code title="get /document-summaries">client.documentSummaries.<a href="./src/resources/document-summaries.ts">list</a>({ ...params }) -> DocumentSummaryListResponse</code>
- <code title="get /document-summaries/{id}/download">client.documentSummaries.<a href="./src/resources/document-summaries.ts">download</a>(id, { ...params }) -> Response</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">Document</a></code>
- <code><a href="./src/resources/documents.ts">DocumentList</a></code>
- <code><a href="./src/resources/documents.ts">DocumentType</a></code>
- <code><a href="./src/resources/documents.ts">DocumentGetSummariesResponse</a></code>

Methods:

- <code title="post /documents">client.documents.<a href="./src/resources/documents.ts">create</a>({ ...params }) -> Document</code>
- <code title="get /documents/{id}">client.documents.<a href="./src/resources/documents.ts">retrieve</a>(id) -> Document</code>
- <code title="put /documents/{id}">client.documents.<a href="./src/resources/documents.ts">update</a>(id, { ...params }) -> Document</code>
- <code title="get /documents">client.documents.<a href="./src/resources/documents.ts">list</a>({ ...params }) -> DocumentList</code>
- <code title="delete /documents/{id}">client.documents.<a href="./src/resources/documents.ts">delete</a>(id) -> void</code>
- <code title="get /documents/{id}/download">client.documents.<a href="./src/resources/documents.ts">download</a>(id) -> Response</code>
- <code title="get /documents/{id}/document-summaries">client.documents.<a href="./src/resources/documents.ts">getSummaries</a>(id) -> DocumentGetSummariesResponse</code>

# Entities

Types:

- <code><a href="./src/resources/entities/entities.ts">Entity</a></code>
- <code><a href="./src/resources/entities/entities.ts">EntityKind</a></code>
- <code><a href="./src/resources/entities/entities.ts">EntityList</a></code>

Methods:

- <code title="get /entities/{id}">client.entities.<a href="./src/resources/entities/entities.ts">retrieve</a>(id) -> Entity</code>
- <code title="get /entities">client.entities.<a href="./src/resources/entities/entities.ts">list</a>({ ...params }) -> EntityList</code>
- <code title="delete /entities/{id}">client.entities.<a href="./src/resources/entities/entities.ts">delete</a>(id) -> void</code>

## Valuation

Types:

- <code><a href="./src/resources/entities/valuation.ts">Valuation</a></code>

Methods:

- <code title="post /entities/{id}/valuation">client.entities.valuation.<a href="./src/resources/entities/valuation.ts">create</a>(id, { ...params }) -> Valuation</code>
- <code title="get /entities/{id}/valuation">client.entities.valuation.<a href="./src/resources/entities/valuation.ts">retrieve</a>(id) -> Valuation</code>

# Households

Types:

- <code><a href="./src/resources/households.ts">Household</a></code>
- <code><a href="./src/resources/households.ts">IndividualList</a></code>
- <code><a href="./src/resources/households.ts">HouseholdListResponse</a></code>

Methods:

- <code title="post /households">client.households.<a href="./src/resources/households.ts">create</a>({ ...params }) -> Household</code>
- <code title="get /households/{id}">client.households.<a href="./src/resources/households.ts">retrieve</a>(id) -> Household</code>
- <code title="put /households/{id}">client.households.<a href="./src/resources/households.ts">update</a>(id, { ...params }) -> Household</code>
- <code title="get /households">client.households.<a href="./src/resources/households.ts">list</a>({ ...params }) -> HouseholdListResponse</code>
- <code title="delete /households/{id}">client.households.<a href="./src/resources/households.ts">delete</a>(id) -> void</code>
- <code title="get /households/{id}/documents">client.households.<a href="./src/resources/households.ts">listDocuments</a>(id, { ...params }) -> DocumentList</code>
- <code title="get /households/{id}/entities">client.households.<a href="./src/resources/households.ts">listEntities</a>(id, { ...params }) -> EntityList</code>
- <code title="get /households/{id}/individuals">client.households.<a href="./src/resources/households.ts">listIndividuals</a>(id, { ...params }) -> IndividualList</code>

# Individuals

Types:

- <code><a href="./src/resources/individuals.ts">Individual</a></code>

Methods:

- <code title="post /individuals">client.individuals.<a href="./src/resources/individuals.ts">create</a>({ ...params }) -> Individual</code>
- <code title="get /individuals/{id}">client.individuals.<a href="./src/resources/individuals.ts">retrieve</a>(id) -> Individual</code>
- <code title="put /individuals/{id}">client.individuals.<a href="./src/resources/individuals.ts">update</a>(id, { ...params }) -> Individual</code>
- <code title="get /individuals">client.individuals.<a href="./src/resources/individuals.ts">list</a>({ ...params }) -> IndividualList</code>
- <code title="delete /individuals/{id}">client.individuals.<a href="./src/resources/individuals.ts">delete</a>(id) -> void</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id) -> UserRetrieveResponse</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> UserListResponse</code>
