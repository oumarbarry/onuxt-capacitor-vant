<script setup lang="ts">
const active = ref("home")
</script>

<template>
  <Body ontouchstart="" class="min-h-screen">
    <van-config-provider theme="dark">
      <!-- top -->
      <div class="van-safe-area-top">
        <van-nav-bar title="Title" />
      </div>

      <main class="p-10 space-y-10">
        <h1 class="text-lg">
          Nuxt + Capacitor (with zero config HMR)
        </h1>

        <van-button>
          Getting started
        </van-button>
      </main>

      <!-- bottom -->
      <div class="van-safe-area-bottom">
        <van-tabbar v-model="active">
          <van-tabbar-item name="home" icon="home-o">
            Home
          </van-tabbar-item>
          <van-tabbar-item name="search" icon="search">
            Search
          </van-tabbar-item>
          <van-tabbar-item name="settings" icon="setting-o">
            Settings
          </van-tabbar-item>
        </van-tabbar>
      </div>
    </van-config-provider>
  </Body>
</template>

<style>
.van-theme-dark body {
  color: #f5f5f5;
  background-color: black;
}
</style>
