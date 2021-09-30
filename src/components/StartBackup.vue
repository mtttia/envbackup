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
                ></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn
                    depressed
                    elevation="3"
                    large
                >Browse</v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="10">
                <v-text-field
                    label="backup folder"
                    placeholder="backup folder"
                    solo
                ></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn
                    depressed
                    elevation="3"
                    large
                >Browse</v-btn>
            </v-col>
        </v-row>
        <v-btn
            block
            elevation="2"
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