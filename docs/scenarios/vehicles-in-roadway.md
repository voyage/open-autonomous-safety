# Vehicles in Roadway

:::warning ALPHA
Work In Progress
:::

[[toc]]

## Stationary vehicle
**2-2-XX-VR-STR-CAR:DP**

Ego approaches stopped vehicle on side of road

|      |                                    |             |
| :--: | ---------------------------------- | ----------- |
| A    | ![VR-01](./images/VR-01.png) | **Scenario** <br> Ego approaches a stationary vehicle blocking the lane of travel on the right side of the road. <br><br> **Expected Result** <br>Ego reduces speed and passes the vehicle on the left, maintaining a buffer of 3'. |

## Stationary vehicle with a door open
**2-2-XX-VR-STR-CAR:DP:01**

Ego approaches stopped vehicle on side of road with driver door open

|      |                                    |             |
| :--: | ---------------------------------- | ----------- |
| A    | ![VR-02](./images/VR-02.png) | **Scenario** <br> Ego approaches a stationary vehicle blocking the lane of travel on the right side of the road with its driver-side door open. <br><br> **Expected Result** <br>Ego reduces speed and passes vehicle on the left, maintaining a buffer of 3'. |

## Car same direction
**2-2-XX-VR-STR-CAR**

Ego approaches car traveling in the same direction

|      |                                    |             |
| :--: | ---------------------------------- | ----------- |
| A    | ![VR-03](./images/VR-03.png) | **Scenario** <br> Ego approaches a car traveling in the same lane. <br><br> **Expected Result** <br>Ego reduces speed and maintains a following distance.

## Golf cart same direction
**2-2-XX-VR-STR-GC**

Ego approaches golf cart traveling on the right in the same direction

|      |                                    |             |
| :--: | ---------------------------------- | ----------- |
| A    | ![VR-04](./images/VR-04.png) | **Scenario** <br> Ego approaches a golf cart traveling on the right side of the lane. <br><br> **Expected Result** <br> Ego reduces speed and passes golf cart on the left, maintaining a buffer of 3'. |

## Bicycle traveling same direction
**2-2-XX-VR-STR-BIKE**

Ego approaches bicycle traveling in the same direction on right

|      |                                    |             |
| :--: | ---------------------------------- | ----------- |
| A    | ![VR-05](./images/VR-05.png) | **Scenario** <br> Ego approaches a bicycle traveling on the right side ofthe lane. <br><br> **Expected Result** <br>Ego reduces speed and passes golf cart on the left, maintaining a buffer of 3'. |

## Stationary vehicle with oncoming vehicle
**2-2-XX-VR-STR-CAR:DP-CAR:W**

Ego approaches vehicle blocking lane of travel with oncoming vehicle.

|      |                                    |             |
| :--: | ---------------------------------- | ----------- |
| A    | ![VR-06-A](./images/VR-06-A.png) | **Scenario** <br> Ego approaches a stationary vehicle blocking the lane of travel on the right side of the road. There is an oncoming vehicle in the opposing lane. <br><br> **Expected Result** <br>Ego comes to a stop. |
| B    | ![VR-06-B](./images/VR-06-B.png) | **Scenario** <br> Oncoming vehicle passes Ego. <br><br> **Expected Result** <br>Ego passes stationary vehicle. |
| C    | ![VR-06-C](./images/VR-06-C.png) | **Scenario complete 🎉** |

## Motorcycle traveling same direction
**2-2-XX-VR-STR-M**

Ego approaches motorcycle traveling in same direction in lane

|      |                                    |             |
| :--: | ---------------------------------- | ----------- |
| A    | ![VR-07](./images/VR-07.png) | **Scenario** <br> Ego approaches a motorcycle traveling in the same lane. <br><br> **Expected Result** <br> Ego reduces speed and maintains following distance (doesn't pass).|


## Golf cart same direction with oncoming vehicle
**2-2-XX-VR-STR-GC-CAR:W**

Ego approaches golf cart traveling on right side with oncoming vehicle.

|      |                                    |             |
| :--: | ---------------------------------- | ----------- |
| A    | ![VR-08-A](./images/VR-08-A.png) | **Scenario** <br> Ego approaches a golf cart traveling on the right side of the lane. There is an oncoming vehicle in the opposing lane. <br><br> **Expected Result** <br> Ego maintains following distance to golf cart. |
| B    | ![VR-08-B](./images/VR-08-B.png) | **Scenario** <br> Oncoming vehicle passes Ego. <br><br> **Expected Result** <br> Ego passes golf cart. |
| C    | ![VR-08-C](./images/VR-08-C.png) | **Scenario complete 🎉** |

## Bicycle in same direction with oncoming vehicle
**2-2-XX-VR-STR-BIKE-CAR:W**

Ego approaches bicycle traveling on right side with oncoming vehicle.

|      |                                    |             |
| :--: | ---------------------------------- | ----------- |
| A    | ![VR-09-A](./images/VR-09-A.png) | **Scenario** <br> Ego approaches a bicycle traveling on the right side of the lane. There is an oncoming vehicle in the opposing lane. <br><br> **Expected Result** <br>Ego maintains following distance to bicycle. |
| B    | ![VR-09-B](./images/VR-09-B.png) | **Scenario** <br> Oncoming vehicle passes Ego. <br><br> **Expected Result** <br>Ego passes bicycle. |
| C    | ![VR-09-C](./images/VR-09-C.png) | **Scenario complete 🎉** |
