<p style="text-align:center;" align="center">
      <picture align="center">
         <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/khulnasoft/meshplay-extensions-packages/master/.github/assets/images/khulnasoft/khulnasoft-light-no-trim.svg" />
         <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/khulnasoft/meshplay-extensions-packages/master/.github/assets/images/khulnasoft/khulnasoft-no-trim.svg" />
         <img align="center" src="https://raw.githubusercontent.com/khulnasoft/meshplay-extensions-packages/master/.github/assets/images/khulnasoft/khulnasoft-no-trim.svg" alt="Shows a dark khulnasoft logo in light mode and a white logo in dark mode" width="45%"/>
      </picture>
</p>

<p align="center">
<a href="https://github.com/khulnasoft/khulnasoft" alt="GitHub contributors">
<img src="https://img.shields.io/github/contributors/khulnasoft/khulnasoft.svg" /></a>
<a href="https://github.com/issues?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Akhulnasoft+org%3Ameshplay+org%3Akhulnasoft+org%3Aservice-mesh-performance+org%3Aservice-mesh-patterns+label%3A%22help+wanted%22" alt="Help wanted GitHub issues">
<img src="https://img.shields.io/github/issues/khulnasoft/khulnasoft/help%20wanted.svg?color=%23DDDD00" /></a>
<a href="https://slack.khulnasoft.com" alt="Slack">
<img src="https://img.shields.io/badge/Slack-@khulnasoft.svg?logo=slack" /></a>
<a href="https://twitter.com/khulnasoft" alt="Twitter Follow">
<img src="https://img.shields.io/twitter/follow/khulnasoft.svg?label=Follow+KhulnaSoft&style=social" /></a>
<a href="https://github.com/khulnasoft/khulnasoft" alt="License">
<img src="https://img.shields.io/github/license/khulnasoft/khulnasoft.svg" /></a>
</p>

<h5><p align="center"><i>If you’re using KhulnaSoft products or if you like the project, please <a href="https://github.com/khulnasoft/khulnasoft/stargazers">★</a> this repository to show your support! 🤩</i></p></h5>

# KhulnaSoft Badges
*Examples*

[![](https://raw.githubusercontent.com/khulnasoft/meshplay-extensions-packages/master/assets/badges/meshmap/meshmap.svg)](https://meshplay.khulnasoft.com/user/090e7114-509a-4046-81f1-9c5fb8daf724?tab=badges) [![](https://raw.githubusercontent.com/khulnasoft/meshplay-extensions-packages/master/assets/badges/meshplay-operator/meshplay-operator.svg)](https://meshplay.khulnasoft.com/user/090e7114-509a-4046-81f1-9c5fb8daf724?tab=badges) [![](https://raw.githubusercontent.com/khulnasoft/meshplay-extensions-packages/master/assets/badges/docker-extension/docker-extension.svg)](https://meshplay.khulnasoft.com/user/090e7114-509a-4046-81f1-9c5fb8daf724?tab=badges)
<!---

![](https://raw.githubusercontent.com/khulnasoft/meshplay-extensions-packages/master/assets/badges/first-share/first-share.svg)
![](https://raw.githubusercontent.com/khulnasoft/meshplay-extensions-packages/master/assets/badges/first-log-streaming-session/first-log-streaming-session.svg)
 [![](https://raw.githubusercontent.com/khulnasoft/meshplay-extensions-packages/master/assets/badges/bring-a-buddy/bring-a-buddy.svg)](https://meshplay.khulnasoft.com/user/090e7114-509a-4046-81f1-9c5fb8daf724?tab=badges) 
[![](https://raw.githubusercontent.com/khulnasoft/meshplay-extensions-packages/master/assets/badges/first-application/first-application.svg)](https://meshplay.khulnasoft.com/user/090e7114-509a-4046-81f1-9c5fb8daf724?tab=badges) 
-->

See https://badges.khulnasoft.com for the full set and description of the KhulnaSoft Recognition Program.

# Registry for KhulnaSoft Cloud Remote Provider Packages
Access KhulnaSoft Cloud at https://meshplay.khulnasoft.com 


## About KhulnaSoft

KhulnaSoft's cloud native application and infrastructure management software enables organizations to expect more from their infrastructure. We embrace _developer_-defined infrastructure. We empower developers to change how they write applications, support _operators_ in rethinking how they run modern infrastructure, and enable _product owners_ to regain full-control over their product portfolio.

### Directory structure
1. `action-assets`: 
      1.   Stores the snapshots taken as part of pull requests. Each snapshot have 2 versions and are namespaced based on the year and month they were taken, for eg: snapshot against a particular PR created on 10th July 2024 will be stored at
      a. Light: `action-assets/2024@7/<design-id>-light.png` 
      b. Dark version: `action-assets/2024@7/<design-id>-dark.png` 
 
      2. `design-assets`: Stores the snapshots taken for catalog items. Every time a catalog item is updated, the corresponding snapshot for that catalog item is also updated. Catalog snapshots are referenced rom different systems, which need unauthenticated, public access to static resources, and therefore, require a permanent link.
      Each catalog item has two versions of the snapshot stored at
      a. Light: `actions-assets/design-assets/<design-id-light>.png`
      b. Dark: `actions-assets/design-assets/<design-id-dark>.png`


2. `assets`: Contains 3 directories
      1. `badges`: Stores the SVG and PNG representation of badges to be used in emails.
      2. `meshmap`: Stores the animated gifs, svgs, quicktips etc,
      3. `organizations`: Stores the custom icons in PNG format namespaced under orgid.
      ```
      organizations/<org-uuid>/mobile.png
      organizations/<org-uuid>/desktop.png
      ```

3. `email`: Contains html emails templates, svgs/png to be used for emails sent for `khulnasoft-cloud` and other newsletter html templates.
