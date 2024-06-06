<script setup lang="ts">
import type { IPost } from "~/types";

// const posts = ref<IPost[]>([]);
const currentPageNumber = ref(1);
const quantityPage = ref(5);

const posts = ref<IPost[]>([
  {
    id: "1",
    createdAt: "2021-04-23T05:11:54.250Z",
    title: "Licensed Granite Chair",
    preview:
      "programming the port won't do anything, we need to copy the auxiliary USB system!",
    image: "http://lorempixel.com/640/480/technics",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "2",
    createdAt: "2021-04-23T07:13:49.861Z",
    title: "Fantastic Concrete Mouse",
    preview:
      "If we generate the application, we can get to the AGP capacitor through the optical GB sensor!",
    image: "http://lorempixel.com/640/480/nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "3",
    createdAt: "2021-04-23T10:39:19.778Z",
    title: "Practical Fresh Hat",
    preview:
      "transmitting the program won't do anything, we need to compress the neural SCSI hard drive!",
    image: "http://lorempixel.com/640/480/city",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "4",
    createdAt: "2021-04-23T06:57:34.529Z",
    title: "Handcrafted Fresh Ball",
    preview:
      "If we navigate the sensor, we can get to the SSL driver through the auxiliary HTTP matrix!",
    image: "http://lorempixel.com/640/480/nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "5",
    createdAt: "2021-04-23T02:35:44.299Z",
    title: "Practical Rubber Bike",
    preview:
      "The AGP transmitter is down, navigate the primary feed so we can navigate the XML microchip!",
    image: "http://lorempixel.com/640/480/sports",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "6",
    createdAt: "2021-04-23T10:16:55.437Z",
    title: "Sleek Fresh Chair",
    preview:
      "parsing the hard drive won't do anything, we need to compress the open-source PCI feed!",
    image: "http://lorempixel.com/640/480/city",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "7",
    createdAt: "2021-04-23T12:37:51.269Z",
    title: "Tasty Metal Table",
    preview:
      "You can't hack the application without connecting the solid state GB bus!",
    image: "http://lorempixel.com/640/480/animals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "8",
    createdAt: "2021-04-22T16:19:19.463Z",
    title: "Unbranded Cotton Computer",
    preview:
      "Try to index the THX bus, maybe it will synthesize the auxiliary alarm!",
    image: "http://lorempixel.com/640/480/food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "9",
    createdAt: "2021-04-22T16:37:50.935Z",
    title: "Intelligent Rubber Tuna",
    preview:
      "I'll reboot the online THX driver, that should monitor the IB application!",
    image: "http://lorempixel.com/640/480/fashion",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "10",
    createdAt: "2021-04-23T08:23:02.619Z",
    title: "Small Cotton Cheese",
    preview:
      "I'll parse the neural SSL microchip, that should feed the THX panel!",
    image: "http://lorempixel.com/640/480/nature",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "11",
    createdAt: "2021-04-23T04:29:06.758Z",
    title: "Incredible Fresh Gloves",
    preview:
      "Use the primary COM driver, then you can input the 1080p bandwidth!",
    image: "http://lorempixel.com/640/480/city",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "12",
    createdAt: "2021-04-23T12:58:56.042Z",
    title: "Handcrafted Steel Bacon",
    preview:
      "copying the bus won't do anything, we need to connect the redundant CSS bandwidth!",
    image: "http://lorempixel.com/640/480/animals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "13",
    createdAt: "2021-04-23T07:41:54.967Z",
    title: "Practical Granite Hat",
    preview:
      "transmitting the sensor won't do anything, we need to override the auxiliary THX protocol!",
    image: "http://lorempixel.com/640/480/nightlife",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "14",
    createdAt: "2021-04-23T04:55:07.220Z",
    title: "Gorgeous Granite Bike",
    preview:
      "I'll override the digital HTTP hard drive, that should bus the HTTP firewall!",
    image: "http://lorempixel.com/640/480/city",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "15",
    createdAt: "2021-04-23T05:49:07.166Z",
    title: "Licensed Metal Salad",
    preview:
      "The SMS array is down, program the cross-platform pixel so we can connect the TCP system!",
    image: "http://lorempixel.com/640/480/cats",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u",
  },
]);
</script>

<template>
  <div class="root">
    <div class="post-list">
      <PostCart
        v-for="post in posts"
        :key="post.id"
        :id="post.id"
        :preview="post.preview"
        :image="post.image"
        :title="post.title"
      ></PostCart>
    </div>

    <Pagination
      v-if="quantityPage > 1"
      :quantityPage="quantityPage"
      :currentPageNumber="currentPageNumber"
    />
  </div>
</template>

<style scoped>
@import url("./styles.scss");
</style>
