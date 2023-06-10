import React from 'react'
import SoftBox from 'components/SoftBox'
import SoftTypography from 'components/SoftTypography'
import { Grid } from '@mui/material'

export default function Address() {
    return (
        <SoftBox
            pt={2}
            mb={3}
            px={2}
        >
            <SoftBox display="flex" flexDirection="column" justifyContent="start">
                <SoftTypography variant="h5" fontWeight="medium" textAlign="left">
                    Address
                </SoftTypography>
            </SoftBox>
            <SoftBox textAlign="left">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} xl={12}>
                        <label>Address 1</label>
                        <input
                            class="multisteps-form__input form-control"
                            type="text"
                            placeholder="eg. Street 111"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} xl={12}>
                        <label>Address 2</label>
                        <input
                            class="multisteps-form__input form-control"
                            type="text"
                            placeholder="eg. Street 221"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} xl={6}>
                        <label>City</label>
                        <input
                            class="multisteps-form__input form-control"
                            type="text"
                            placeholder="eg. Tokyo"
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} xl={3}>
                        <label>State</label>
                        <select
                            class="multisteps-form__select form-control"
                        >
                            <option selected="selected">...</option>
                            <option value="1">State 1</option>
                            <option value="2">State 2</option>
                        </select>
                    </Grid>
                    <Grid item xs={12} sm={3} xl={3}>
                        <label>Zip</label>
                        <input
                            class="multisteps-form__input form-control"
                            type="text"
                            placeholder="7 letters"
                        />
                    </Grid>
                </Grid>
            </SoftBox>
        </SoftBox>
    )
}
