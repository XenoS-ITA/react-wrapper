RegisterCommand("sendmessage", function(_, args)
    local message = table.concat(args, " ")

    SendNUIMessage({message = message})
end)

RegisterCommand("focus", function()
    SetNuiFocus(true, true)
end)
RegisterCommand("removefocus", function()
    SetNuiFocus(false, false)
end)
