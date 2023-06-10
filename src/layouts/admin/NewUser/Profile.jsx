import React from 'react'
import SoftBox from 'components/SoftBox'
import SoftTypography from 'components/SoftTypography'
import { Grid } from '@mui/material'

export default function Profile() {
    return (
        <SoftBox
            pt={2}
            mb={3}
            px={2}
        >
            <SoftBox display="flex" flexDirection="column" justifyContent="start">
                <SoftTypography variant="h5" fontWeight="medium" textAlign="left">
                    Socials
                </SoftTypography>
            </SoftBox>
            <SoftBox textAlign="left">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} xl={12}>
                        <label>Public Email</label>
                        <input
                            class="multisteps-form__input form-control"
                            type="text"
                            placeholder="Use an address you don't use frequently."
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} xl={12}>
                        <label>Bio</label>
                        <textarea
                            class="multisteps-form__textarea form-control"
                            rows="5"
                            placeholder="Say a few words about who you are or what you're working on."
                        ></textarea>
                    </Grid>
                </Grid>
            </SoftBox>
        </SoftBox>
    )
}
