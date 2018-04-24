# Overview

:::warning ALPHA
Work In Progress
:::

# Overview
This document outlines scenarios that an Autonomous Vehicle (AV) might encounter while operating on public or private roads. Each scenario defines detailed behavioral requirements that must be followed by an AV in order to maintain the highest standard of safety at all times.


We divide our scenarios into sections by behavior. These sections enumerate safety critical scenarios that require testing to ensure that an AV can safely navigate.

## OAS Scenarios

Scenarios are divided into one or more steps. Each step has an image, scenario description, and expected result.

* **Image:** The initial state of the world. It shows where the Ego vehicle and any actors exist in space, the current state of Ego, and what actions the actors should take next.
* **Scenario Description:** The actors' behavior in that step.
* **Expected Result:** The expected behavior from Ego. If any expected result is not achieved, the scenario fails.

After the expected result, proceed to next step.

## Behavioral Competencies

Across the industry, lots of amazing work has already been done in defining standardized behavioral competencies for the safe operation of an AV. A subset of these competencies act as the foundation of OAS and are gathered from various public agencies and industry leaders. 

Examples of these competencies include:

### National Highway Traffic Safety Administration (NHTSA)
* Detect and respond to speed limit changes and speed advisories
* Detect and respond to existing traffic (merging into existing traffic)
* Detect and respond to encroaching oncoming vehicles from opposing lane into our lane
* Perform car following (including stop and go)
* Detect and respond to stopped vehicles
* Detect and respond to static obstacles in the path of the vehicle
* Detect and respond stop/yield signs
* Navigate intersections and perform turns
* Detect and respond to work zones and people directing traffic in unplanned or planned events
* Make appropriate right-of-way decisions
* Follow local and state driving laws
* Yield to pedestrians and bicyclists at intersections and crosswalks
* Provide safe distance from vehicles, pedestrians, bicyclists on side of the road (with or without bike lanes)

[NHTSA Federal Automated Vehicles Policy](https://www.transportation.gov/AV/federal-automated-vehicles-policy-september-2016)

### Waymo
* Detect and respond to pedestrians in road (not walking through intersection or crosswalk)
* Detect and respond to animals
* Detect and respond to motorcyclists
* Detect and respond to vehicle control loss (e.g. reduced road friction)
* Detect and respond to conditions involving vehicle, system, or component-level failures or faults
* Detect and respond to non-collision safety situations (e.g. vehicle doors ajar, seat belts unbuckled)
* Detect and respond to vehicles parking in the roadway

[Waymo Safety Report](https://waymo.com/safety/)

### Voyage
* Navigate environments with occluded view (e.g. bushes, large signs)
* Detect and respond to reversing vehicles from driveways or parking spots
* Navigate cul-de-sacs (both with and without center island)
* Navigate through narrow streets
* Navigate parking lots
* Detect and respond to golf carts operating in dedicated side lanes (or bike lanes)