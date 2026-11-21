import { defineConfig } from '@playwright/test';
export default defineConfig({testDir:'.',testMatch:'compat.spec.js',webServer:{command:'npx vite --host 0.0.0.0',url:'http://127.0.0.1:5173',reuseExistingServer:false},use:{baseURL:'http://127.0.0.1:5173'} });
