Usage

## C#

### Installation

Install the .Net runtime.

### Development

## Nodejs

### Installation

Install nodejs and yarn

```
$ cd ./nodejs && SAUCE_USERNAME=username SAUCE_ACCESS_KEY=access_key yarn test
```

optional:

`GKE_CLUSTER`

note: for testing clusters with self-signed ssl certs, you might need to tell the node `https` module to ignore errors.

`NODE_TLS_REJECT_UNAUTHORIZED=0`


## Java

### Installation

Install the Java Development Kit

```
$ brew tap AdoptOpenJDK/openjdk
$ brew cask install adoptopenjdk8
```

Install gradle

```
$ brew install gradle
```

### Running

```
$ SAUCE_USERNAME=<username> SAUCE_ACCESS_KEY=<access key> make java
```