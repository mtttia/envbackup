<template>
    <div>
    
    <v-card
        class="central-card"
        elevation="3"
        max-width="700"
    >
        
        <v-row>
            <v-col cols="10">
                <v-text-field
                    label="src folder"
                    placeholder="src folder"
                    solo
                    v-model="srcFolder"
                ></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn
                    depressed
                    elevation="3"
                    large
                    color="primary"
                    @click="selectSrcFoler"              
                >Browse</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="10">
                <v-text-field
                    label="backup folder"
                    placeholder="backup folder"
                    solo
                    v-model="distFolder"
                ></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn
                    depressed
                    elevation="3"
                    large
                    color="primary"
                    @click="selectDistFoler"
                >Browse</v-btn>
            </v-col>
            <p></p>
        </v-row>
        <v-btn
            block
            elevation="3"
            color="primary"
            @click="startBackup"
        >Start Backup</v-btn>
    </v-card>
    </div>
</template>

<style>
    .central-card{
        text-align: center;
        margin-left:auto;
        margin-right: auto;
        padding: 20px;
    }
</style>

<script lang="ts">
    import Vue from 'vue';
    import { remote } from 'electron'
    const dialog = remote.dialog
    import { envBackup, pathCorrector } from '../util/backup'

    export default Vue.extend({
    name: 'StartBackup',

    data: () => ({
        srcFolder:"",
        distFolder:""
    }),

    methods:{
        startBackup()
        {
            try{
                envBackup(this.srcFolder, this.distFolder)
            }catch(e)
            {
                alert('errore durante il backup')
            }
        },
        selectSrcFoler()
        {
            try{
                this.srcFolder = pathCorrector((dialog.showOpenDialogSync({properties:['openDirectory']}) as string[])[0])
            }catch(e)
            {
                alert('errore durante la scelta della cartella')
            }
        },
        selectDistFoler()
        {
            try{
                this.distFolder = pathCorrector((dialog.showOpenDialogSync({properties:['openDirectory']}) as string[])[0])
            }catch(e)
            {
                alert('errore durante la scelta della cartella')
            }
        }
    }
    });
</script>
