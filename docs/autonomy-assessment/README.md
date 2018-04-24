---
sidebar: auto
---

:::warning ALPHA
Work In Progress
:::

# Overview

A fully autonomous vehicle functions without human intervention. OAS proposes measuring autonomy progress in terms of Miles Per Intervention (MPI). MPI not only captures the industry-accepted metric of Miles Per Disengagement (MPD), but also tracks any time a human is required to make a safety critical decision (e.g. remote tele-operations).

<img src="/field-collection.jpg" alt="Field Collection" style="max-width:130%;left:-10%;position:relative">

## Classifying Interventions

Interventions are grouped into the following categories:

|                    |             |
| ------------------ |-------------|
| **Critical** | Disengagement where driver intervention is necessary to prevent a safety-critical situation. [MPCI](#miles-per-critical-intervention-mpci) |
| **Unsupported** | Disengagement where the driver encounters an unsupported scenario [MPUI](#miles-per-unrecoverable-intervention-mpui) |
| **Experience** | Disengagement due to uncomfortable riding experience [MPEI](#miles-per-experience-intervention) |
| **Malfunction** | Disengagement caused by a hardware or software error. |
| **Remote** | Intervention from remote vehicle operator. |

## Metrics

### Miles Per Intervention (MPI)
Average number of miles between any class of intervention.
 
```js
MPI = (Total Autonomous Miles) / (Total Interventions)
```

### Miles Per Critical Intervention (MPCI)
Average number of miles between critical interventions. 

MPCI quantifies the highest priority disengagements.   

```js
MPCI = (Total Autonomous Miles) / (Total Critical Interventions)
```
*Additional Notes: Since drivers disengage early for safety-critical scenarios, any disengagement flagged as such should be re-simulated to determine the outcome of the situation.*

### Miles Per Unsupported Intervention (MPUI)
Average number of miles between unsupported interventions. 

MPUI quantifies cases in which the vehicle explicitly lacks the capability to continue autonomously. 

```js
MPUI = (Total Autonomous Miles) / (Total Unsupported Interventions)
```

### Miles Per Experience Intervention (MPEI)
Average number of miles between experience interventions. 

MPEI quantifies cases where passenger experience is uncomfortable.  

```js
MPEI = (Total Autonomous Miles) / (Total Experience Interventions)
```

### Miles Per Malfunction Intervention (MPMI)
Average number of miles between malfunction interventions. 

MPMI quantifies cases where a malfunction occurs.

```js
MPMI = (Total Autonomous Miles) / (Total Malfunction Interventions)
```

### Miles Per Remote Intervention (MPRI)
Average number of miles between remote interventions. 

MPRI quantifies cases where a remote operator intervenes.

```js
MPRI = (Total Autonomous Miles) / (Total Remote Interventions)
```

## Collection Cycle

### Field Collection
Data collection begins in the field with the drivers of the Operations team. The primary method used to identify software problems is tracking disengagements. Every disengagement is geotagged and time-stamped. Operations Specialists can provide additional context for the disengagement.

<img src="/metrics.jpg" alt="Metrics" style="max-width:130%;left:-10%;position:relative">

### Triage
Every trip is recorded automatically and our riders are encouraged to leave feedback. Our data is stored locally on the vehicle and syncs at night to our servers where it is processed, evaluated, and archived. With the uploaded data, our engineers can select the trips to replay and visualize the content at any time.

<img src="/data-collection.jpg" alt="Collected Data" style="max-width:130%;left:-10%;position:relative">


### Simulation
Simulation plays a critical role in helping validate new software releases. It allows vehicles to accumulate miles driving challenging scenarios in virtual communities.

Whenever a disengagement occurs, it can be re-simulated on future releases of the autonomy software. Re-simulation allows the team to playback previously collected data and simulate how the vehicle would have reacted if the driver had not intervened.

