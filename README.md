# StatEngine

StatEngine is a fire service analytical system, the most comprehensive way to get accurate and real-time information to help fire service leaders assure adequate fire resources, optimize fire operations, reduce firefighter injury and death, minimize civilian injury and death, and minimize property loss.  More information about funding and background is available [here](https://www.nist.gov/ctl/pscr/real-time-open-source-data-analytics-and-visualization-platform).

## Getting Started

### Prerequisites

Ensure the following packages are installed
- [Git](https://git-scm.com/downloads)
- [Node.js and npm](https://nodejs.org) Node >= 8.x.x, npm >= 6.5.x
- [PostSQL](https://www.postgresql.org/download/) 9.6.5
- [Elasticsearch](https://www.elastic.co/downloads/past-releases/elasticsearch-6-4-2) 6.4.2


1.  Run `npm install --global gulp`

1.  Run `npm install --global elasticdump`

1.  Run `brew install pkg-config cairo pango libpng jpeg giflib`

1.  (Linux) Run `apt-get install -y libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++`

#### PostgreSQL Setup

1. Create user in PostgreSQL (username: `statengine`, password: `statengine`)

1. Create `statengine` database in PostgreSQL

#### Elasticsearch Setup

1.  Navigate to your Elasticsearch install directory  (ex. `cd elasticsearch-6.4.2`)

1.  Run `.\bin\elasticsearch`

### Loading Elasticsearch Test Data

#### Nightly Dump

A nightly dump of elasticdump data is availabe in S3.   Please contact a team member for access. 

#### Loading data

1. Make sure Elasticsearch is running

2. Run `multielasticdump --input="./es-test-data" --output="http://localhost:9200" --direction="load"`

### Developing

1.  Run `git clone https://github.com/StatEngine/stat-engine.git`

2.  Obtain **env.json** secrets file from development team and copy to the root of **stat-engine** directory

3.  Run `npm install`

4.  Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

5.  Login with username: `richmond`, password: `password`.

### Testing
Stat-Engine uses [BrowserStack](https://www.browserstack.com/contact#open-source) for compatibility testing. 
![](https://s3.amazonaws.com/statengine-public-assets/Browserstack-logo%402x.png)


