'use client'
import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css' // Import Mapbox CSS
import { EditorCanvasTypes, EditorNodeType } from '@/lib/types'
import { useNodeConnections } from '@/providers/connections-provider'
import { useEditor } from '@/providers/editor-provider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CONNECTIONS, EditorCanvasDefaultCardTypes } from '@/lib/constant'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { onDragStart } from '@/lib/editor-utils'
import EditorCanvasIconHelper from './editor-canvas-card-icon-helper'
import { Accordion } from '@radix-ui/react-accordion'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import RenderConnectionAccordion from './render-connection-accordion'

mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYWNmdXNlZGxhYnMiLCJhIjoiY2xicGdwdHljMHQ1bzN4cWhtNThvbzdqcSJ9.73fb6zHMeO_c8eAXpZVNrA'

type Props = {
    nodes: EditorNodeType[]
}

const nodeNames = [
  'Aggregated_Traffic_Incidents_by_Accident_Severity__H3',
  'AirBnb_Listings',
  'Airplane_Detection_AOI',
  'Arcgis_Rgb',
  'Arraylake_Example',
  'Blank_Basemap',
  'Boston_Bikes_Example',
  'Building_Tile_Example',
  'CDLs_Tile_Example',
  'Census_ACS_5yr',
  'Compute_TWI',
  'Coverage_Model_ibis',
  'Crop_Mask_Zonal_Statistics',
  'DC_AOI_Example',
  'DC_AOI_Tile',
  'DC_AOI_Tile_Hex',
  'DC_File_Example',
  'DEM_10m_Tile_Example',
  'DEM_Raster_to_Vector_Example',
  'DEM_Tile_Example'
]

const geospatialNodeNames = [
  'SJoin',
  'Buffer',
  'Intersect',
  'Union',
  'Difference'
]

const EditorCanvasSidebar = ({ nodes }: Props) => {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const { state } = useEditor()
  const { nodeConnection } = useNodeConnections()

  useEffect(() => {
    if (map.current) return // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0, 0],
      zoom: 2,
    })
  }, [])

  return (
    <aside>
      <Tabs defaultValue='udfs' className='h-screen overflow-scroll pb-24'>
        <TabsList className='bg-transparent'>
          <TabsTrigger value='udfs'>UDFs</TabsTrigger>
          <TabsTrigger value='geospatial'>Geospatial</TabsTrigger>
          <TabsTrigger value='settings'>Settings</TabsTrigger>
        </TabsList>
        <Separator />
        <div ref={mapContainer} className="h-64 w-full mb-4" />
        <TabsContent value='udfs' className='flex flex-col gap-4 p-4'>
          {nodeNames.map((nodeName) => (
            <Card
              key={nodeName}
              draggable
              className="w-full cursor-grab border-black bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900"
              onDragStart={(event) =>
                onDragStart(event, nodeName as EditorCanvasTypes)
              }
            >
              <CardHeader className="flex flex-row items-center gap-4 p-4">
                <EditorCanvasIconHelper type={nodeName as EditorCanvasTypes} />
                <CardTitle className="text-md">
                  {nodeName}
                  <CardDescription>{EditorCanvasDefaultCardTypes[nodeName]?.description}</CardDescription>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value='geospatial' className='flex flex-col gap-4 p-4'>
          {geospatialNodeNames.map((nodeName) => (
            <Card
              key={nodeName}
              draggable
              className="w-full cursor-grab border-black bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-900"
              onDragStart={(event) =>
                onDragStart(event, nodeName as EditorCanvasTypes)
              }
            >
              <CardHeader className="flex flex-row items-center gap-4 p-4">
                <EditorCanvasIconHelper type={nodeName as EditorCanvasTypes} />
                <CardTitle className="text-md">
                  {nodeName}
                  <CardDescription>{EditorCanvasDefaultCardTypes[nodeName]?.description}</CardDescription>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value='settings' className='-mt-6'>
          <div className='px-2 py-4 text-center text-xl font-bold'>
            {state.editor.selectedNode.data.title}
          </div>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger className='!no-underline'>Account</AccordionTrigger>
              <AccordionContent>
                {CONNECTIONS.map((connection) => (
                  <RenderConnectionAccordion
                    key={connection.title}
                    state={state}
                    connection={connection}
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </aside>
  )
}

export default EditorCanvasSidebar