import Category from '@/components/icons/category'
import Logs from '@/components/icons/clipboard'
import Templates from '@/components/icons/cloud_download'
import Home from '@/components/icons/home'
import Payment from '@/components/icons/payment'
import Settings from '@/components/icons/settings'
import Workflows from '@/components/icons/workflows'


export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}))


export const menuOptions = [
  { name: 'Dashboard', Component: Home, href: '/dashboard' },
  { name: 'Workflows', Component: Workflows, href: '/workflows' },
  { name: 'Settings', Component: Settings, href: '/settings' },
  // { name: 'Connections', Component: Category, href: '/connections' },
  // { name: 'Billing', Component: Payment, href: '/billing' },
  // { name: 'Templates', Component: Templates, href: '/templates' },
  // { name: 'Logs', Component: Logs, href: '/logs' },
]

export const EditorCanvasDefaultCardTypes = {
  Email: { description: 'Send and email to a user', type: 'Action' },
  Condition: {
    description: 'Boolean operator that creates different conditions lanes.',
    type: 'Action',
  },
  AI: {
    description:
      'Use the power of AI to summarize, respond, create and much more.',
    type: 'Action',
  },
  Slack: { description: 'Send a notification to slack', type: 'Action' },
  'Google Drive': {
    description:
      'Connect with Google drive to trigger actions or to create files and folders.',
    type: 'Trigger',
  },
  Notion: { description: 'Create entries directly in notion.', type: 'Action' },
  'Custom Webhook': {
    description:
      'Connect any app that has an API key and send data to your applicaiton.',
    type: 'Action',
  },
  Discord: {
    description: 'Post messages to your discord server',
    type: 'Action',
  },
  'Google Calendar': {
    description: 'Create a calendar invite.',
    type: 'Action',
  },
  Trigger: {
    description: 'An event that starts the workflow.',
    type: 'Trigger',
  },
  Action: {
    description: 'An event that happens after the workflow begins',
    type: 'Action',
  },
  Wait: {
    description: 'Delay the next action step by using the wait timer.',
    type: 'Action',
  },
  'Aggregated_Traffic_Incidents_by_Accident_Severity__H3': { description: 'Description for Aggregated_Traffic_Incidents_by_Accident_Severity__H3', type: 'Action' },
  'AirBnb_Listings': { description: 'Description for AirBnb_Listings', type: 'Action' },
  'Airplane_Detection_AOI': { description: 'Description for Airplane_Detection_AOI', type: 'Action' },
  'Arcgis_Rgb': { description: 'Description for Arcgis_Rgb', type: 'Action' },
  'Arraylake_Example': { description: 'Description for Arraylake_Example', type: 'Action' },
  'Blank_Basemap': { description: 'Description for Blank_Basemap', type: 'Action' },
  'Boston_Bikes_Example': { description: 'Description for Boston_Bikes_Example', type: 'Action' },
  'Building_Tile_Example': { description: 'Description for Building_Tile_Example', type: 'Action' },
  'CDLs_Tile_Example': { description: 'Description for CDLs_Tile_Example', type: 'Action' },
  'Census_ACS_5yr': { description: 'Description for Census_ACS_5yr', type: 'Action' },
  'Compute_TWI': { description: 'Description for Compute_TWI', type: 'Action' },
  'Coverage_Model_ibis': { description: 'Description for Coverage_Model_ibis', type: 'Action' },
  'Crop_Mask_Zonal_Statistics': { description: 'Description for Crop_Mask_Zonal_Statistics', type: 'Action' },
  'DC_AOI_Example': { description: 'Description for DC_AOI_Example', type: 'Action' },
  'DC_AOI_Tile': { description: 'Description for DC_AOI_Tile', type: 'Action' },
  'DC_AOI_Tile_Hex': { description: 'Description for DC_AOI_Tile_Hex', type: 'Action' },
  'DC_File_Example': { description: 'Description for DC_File_Example', type: 'Action' },
  'DEM_10m_Tile_Example': { description: 'Description for DEM_10m_Tile_Example', type: 'Action' },
  'DEM_Raster_to_Vector_Example': { description: 'Description for DEM_Raster_to_Vector_Example', type: 'Action' },
  'DEM_Tile_Example': { description: 'Description for DEM_Tile_Example', type: 'Action' },
  'SJoin': { description: 'Spatial Join operation', type: 'Geospatial' },
  'Buffer': { description: 'Buffer operation', type: 'Geospatial' },
  'Intersect': { description: 'Intersect operation', type: 'Geospatial' },
  'Union': { description: 'Union operation', type: 'Geospatial' },
  'Difference': { description: 'Difference operation', type: 'Geospatial' },
}

export const CONNECTIONS: Connection[] = [
  {
    title: 'Google Drive',
    description: 'Connect your google drive to listen to folder changes',
    image: '/googleDrive.png',
    connectionKey: 'googleNode',
    alwaysTrue: true,
  },
  {
    title: 'Discord',
    description: 'Connect your discord to send notification and messages',
    image: '/discord.png',
    connectionKey: 'discordNode',
    accessTokenKey: 'webhookURL',
  },
  {
    title: 'Notion',
    description: 'Create entries in your notion dashboard and automate tasks.',
    image: '/notion.png',
    connectionKey: 'notionNode',
    accessTokenKey: 'accessToken',
  },
  {
    title: 'Slack',
    description:
      'Use slack to send notifications to team members through your own custom bot.',
    image: '/slack.png',
    connectionKey: 'slackNode',
    accessTokenKey: 'slackAccessToken',
    slackSpecial: true,
  },
]