import { useState } from "react";
import toast from "react-hot-toast";
import { getChannels as getChannelsRequest } from "../../services/api";

export const useChannels = () => {
    const [channels, setChannels] = useState([])

    const getChannels = async (isLogged = false) => {
        const channelsData = await getChannelsRequest()
        if(channelsData.error){
            return toast.error(
                channelsData.e?.response?.data ||
                'Ocurrio un error al buscar los canales en la base de datos'
            )
        }

        if(!isLogged){
            return setChannels({channels: channelsData.data.channels})
        }

        setChannels({
            channels: channelsData.data.channels
        })
    }

    return{
        getChannels,
        isFectching: !Boolean(channels),
        allChannels: channels?.channels
    }
}